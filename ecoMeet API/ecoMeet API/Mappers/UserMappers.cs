using ecoMeet_API.Dtos.User;
using ecoMeet_API.Enums;
using ecoMeet_API.Models;
using System.Runtime.CompilerServices;

namespace ecoMeet_API.Mappers
{
    public static class UserMappers
    {
        public static UserDto ToUserDto(this User userModel)
        {
            return new UserDto
            {
                UserId = userModel.Id,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Email = userModel.Email,
                Password = userModel.Password,
                UserType = userModel.UserType,
                City = userModel.City,
                Points = userModel.Points,
                OrganizationEmail = userModel.OrganizationEmail,
                OrganizationName = userModel.OrganizationName,
                PhoneNumber = userModel.PhoneNumber
            };
        }
    }
}
