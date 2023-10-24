using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class Organizer
    {
        public Organizer()
        {
            Events = new HashSet<Event>();
        }

        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string OrganizationName { get; set; } = null!;
        public string City { get; set; } = null!;
        [Required]
        public int? AdministratorId { get; set; }

        public virtual Administrator? Administrator { get; set; }
        public virtual ICollection<Event> Events { get; set; }
    }
}
