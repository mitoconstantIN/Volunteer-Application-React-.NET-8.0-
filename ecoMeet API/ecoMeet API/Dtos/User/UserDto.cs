using ecoMeet_API.Enums;
using ecoMeet_API.Models;

namespace ecoMeet_API.Dtos.User
{
    public class UserDto
    {
        public string? UserId {  get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int UserType { get; set; }
        public string City { get; set; }
        public int? Points { get; set; }
        public string? OrganizationName { get; set; }
        public string? OrganizationEmail { get; set; }
        public string? PhoneNumber { get; set; }

        public UserCard UserCard { get; set; }

        public EventUser EventUser { get; set; }
    }
}
