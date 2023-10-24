using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class Achievement
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public DateTime Date { get; set; }
        public string Description { get; set; } = null!;
        [Required]
        public string? VolunteerEmail { get; set; }

        public virtual Volunteer? VolunteerEmailNavigation { get; set; }
    }
}
