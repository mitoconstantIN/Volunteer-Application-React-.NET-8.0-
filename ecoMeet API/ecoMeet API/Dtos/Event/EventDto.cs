using ecoMeet_API.Models;

namespace ecoMeet_API.Dtos.Event
{
    public class EventDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string EventType { get; set; } = string.Empty;
        public int ParticipantsCount { get; set; }
        public DateTime Date { get; set; }
        public int Points { get; set; }
        public List<EventUser> EventUsers { get; set; }
    }
}
