using ecoMeet_API.Dtos.User;
using ecoMeet_API.Interfaces;
using ecoMeet_API.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ecoMeet_API.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/account")]
    [ApiController]
    public class UserController:ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly SignInManager <User> _signInManager;
        
        public UserController(UserManager<User> userManager, ITokenService tokenService, SignInManager<User> signInManger)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManger;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.Users.FirstOrDefaultAsync( x => x.UserName == loginDto.Username.ToLower() );
            
            if (user == null) return Unauthorized("Invalid username!");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) return Unauthorized("Username not found and/or password incorrect");

            return Ok(
                    new NewUserDto
                    {
                        UserName = user.UserName,
                        Email = user.Email,
                        Token = _tokenService.CreateToken(user)
                    }
                );

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var user = new User

                {
                    UserType = registerDto.UserType,
                    Email = registerDto.Email,
                    Password = registerDto.Password,
                    FirstName = registerDto.FirstName,
                    LastName = registerDto.LastName,
                    UserName = registerDto.Username,
                    City = registerDto.City,
                    Points = registerDto.Points,
                    OrganizationName = registerDto.OrganizationName,
                    OrganizationEmail = registerDto.OrganizationEmail,
                    PhoneNumber = registerDto.PhoneNumber
                };

                var createdUser = await _userManager.CreateAsync(user, registerDto.Password);

                if(createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(user, "Volunteer");
                    if(roleResult.Succeeded)
                    {
                        return Ok(
                            new NewUserDto
                            {
                                UserName = user.UserName,
                                Email = user.Email,
                                Token = _tokenService.CreateToken(user)
                            }
                            );
                    }else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }

                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }

            }catch(Exception e)
            {
                return StatusCode(500, e);
            }
        }

    }
}
