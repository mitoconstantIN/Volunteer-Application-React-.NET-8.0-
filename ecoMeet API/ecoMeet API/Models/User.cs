using ecoMeet_API.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace ecoMeet_API.Models
{
    public class User : IdentityUser
    {
        //public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserTypeEnum UserType { get; set; }
        public string City { get; set; }
        public int Points { get; set; }
        public string OrganizationName { get; set; }   
        public string OrganizationEmail { get; set; }
        public string PhoneNumber { get; set; }
        
        public UserCard UserCard { get; set; }
        
        public EventUser EventUser { get; set; }

    }
}
