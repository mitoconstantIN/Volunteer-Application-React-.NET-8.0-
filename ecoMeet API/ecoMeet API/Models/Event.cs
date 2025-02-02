﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ecoMeet_API.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string EventType { get; set; } = string.Empty;
        public int ParticipantsCount { get; set; }
        public DateTime Date { get; set; }
        public int Points {  get; set; }
        public virtual ICollection<EventUser> EventUsers { get; set; }
    }
}
