using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Volunteer
    {
        public Volunteer()
        {
            Achievements = new HashSet<Achievement>();
            Events = new HashSet<Event>();
            Level = 1;
            Points = 0;
        }

        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Username { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string City { get; set; } = null!;
        public int Level { get; set; }
        public int Points { get; set; }

        public virtual ICollection<Achievement> Achievements { get; set; }

        public virtual ICollection<Event> Events { get; set; }
    }
}
