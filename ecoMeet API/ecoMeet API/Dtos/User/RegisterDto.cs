using ecoMeet_API.Enums;
using System.ComponentModel.DataAnnotations;

namespace ecoMeet_API.Dtos.User
{
    public class RegisterDto
    {
        [Required]
        public int UserType { get; set; }
        [Required]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? Password {  get; set; }
        public string? Username { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? City { get; set; }
        public int? Points { get; set; } = 0;
        public string? OrganizationName { get; set; }
        public string? OrganizationEmail { get; set; }
        public string? PhoneNumber { get; set; }
        //public string? Id { get; set; }
    }
}
