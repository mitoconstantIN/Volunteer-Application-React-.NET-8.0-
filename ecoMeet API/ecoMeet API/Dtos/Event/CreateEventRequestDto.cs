﻿using ecoMeet_API.Models;

namespace ecoMeet_API.Dtos.Event
{
    public class CreateEventRequestDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string EventType { get; set; } = string.Empty;
        public int ParticipantsCount { get; set; }
        public DateTime Date { get; set; }
        public int Points { get; set; }
        //public virtual EventUser EventUser { get; set; }
    }
}
