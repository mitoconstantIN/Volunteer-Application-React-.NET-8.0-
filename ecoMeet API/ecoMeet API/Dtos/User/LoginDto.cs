using System.ComponentModel.DataAnnotations;

namespace ecoMeet_API.Dtos.User
{
    public class LoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
