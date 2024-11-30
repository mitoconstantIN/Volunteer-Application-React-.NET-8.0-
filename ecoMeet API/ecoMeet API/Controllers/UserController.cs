using ecoMeet_API.Data;
using ecoMeet_API.Dtos.Event;
using ecoMeet_API.Dtos.User;
using ecoMeet_API.Interfaces;
using ecoMeet_API.Mappers;
using ecoMeet_API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace ecoMeet_API.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/account")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly SignInManager<User> _signInManager;
        private readonly ApplicationDbContext _context;

        public UserController(UserManager<User> userManager, ITokenService tokenService, SignInManager<User> signInManger, ApplicationDbContext context)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManger;
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());

            if (user == null) return Unauthorized("Invalid username!");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) return Unauthorized("Username not found and/or password incorrect");

            return Ok(
                    new NewUserDto
                    {
                        Id = user.Id,
                        UserName = user.UserName,
                        Email = user.Email,
                        Token = _tokenService.CreateToken(user),
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        UserType = user.UserType,
                        City = user.City,
                        //Points = user.Points,
                        OrganizationEmail = user.OrganizationEmail,
                        OrganizationName = user.OrganizationName,
                        PhoneNumber = user.PhoneNumber
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
                    //Id = registerDto?.Id,
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

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(user, "Volunteer");
                    if (roleResult.Succeeded)
                    {
                        return Ok(
                            new NewUserDto
                            {
                                //Id = user.Id,
                                UserName = user.UserName,
                                Email = user.Email,
                                Token = _tokenService.CreateToken(user),
                                FirstName = user.FirstName,
                                LastName = user.LastName,
                                UserType = user.UserType,
                                City = user.City,
                                //Points = user.Points,
                                OrganizationEmail = user.OrganizationEmail,
                                OrganizationName = user.OrganizationName,
                                PhoneNumber = user.PhoneNumber 

                            }
                            );
                    } else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }

                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }

            } catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _context.Users.ToList()
                .Select(s => s.ToUserDto());

            return Ok(users);
        }

        [HttpGet("{id}")]

        public IActionResult GetById([FromRoute] string id)
        {
            var user = _context.Users.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user.ToUserDto());
        }
       
        [HttpPost("{userId}/events/{eventId}")]
        public async Task<IActionResult> GetUserEvents([FromRoute] string userId, [FromRoute] int eventId)
        {
            var userExists = await _userManager.Users.AnyAsync(x => x.Id.Equals(userId));
            if (!userExists) return Unauthorized("Invalid User!");

            var eventExits = await _context.Events.AnyAsync(x => x.Id == eventId);
            if (!eventExits) return BadRequest("Event doesn't exists.");

            var userEvent = new EventUser()
            {
                EventId = eventId,
                UserId = userId
            };

            await _context.EventUsers.AddAsync(userEvent);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{userId}/events/{eventId}")]
        public async Task<IActionResult> RemoveUserEvent([FromRoute] string userId, [FromRoute] int eventId)
        {
            var userExists = await _userManager.Users.AnyAsync(x => x.Id.Equals(userId));
            if (!userExists) return Unauthorized("Invalid User!");

            var eventExists = await _context.Events.AnyAsync(x => x.Id == eventId);
            if (!eventExists) return BadRequest("Event doesn't exist.");

            var userEvent = await _context.EventUsers
                                          .FirstOrDefaultAsync(x => x.EventId == eventId && x.UserId == userId);

            if (userEvent == null)
                return NotFound("Event not associated with the user.");

            _context.EventUsers.Remove(userEvent);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("{userId}/events")]
        public async Task<IActionResult> GetUserEvents(string userId)
        {
            var userExists = await _userManager.Users.AnyAsync(x => x.Id == userId);

            if (!userExists) return Unauthorized("Invalid User!");

            var user = await _context.Users
                .Include(x => x.EventUsers)
                .SingleAsync(x => x.Id.Equals(userId));

            var userEventIds = user.EventUsers.Select(x => x.EventId).ToList();
            var events = await _context.Events.Where(x => userEventIds.Contains(x.Id)).ToListAsync();

            var userEventList = new List<EventDto>();
            foreach (var userEvent in events)
            {
                var eventDto = new EventDto()
                {
                    Id = userEvent.Id,
                    Title = userEvent.Title,
                    Description = userEvent.Description,
                    EventType = userEvent.EventType,
                    ParticipantsCount = userEvent.ParticipantsCount,
                    Date = userEvent.Date,
                    Points = userEvent.Points


                };
                userEventList.Add(eventDto);
            }
            return Ok(userEventList);
        }

    }
}
