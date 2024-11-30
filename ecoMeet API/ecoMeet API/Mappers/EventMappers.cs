using ecoMeet_API.Dtos.Event;
using ecoMeet_API.Models;

namespace ecoMeet_API.Mappers
{
    public static class EventMappers
    {
        public static EventDto ToEventDto(this Event eventModel)
        {
            return new EventDto
            {
                Id = eventModel.Id,
                Title = eventModel.Title,
                Description = eventModel.Description,
                EventType = eventModel.EventType,
                ParticipantsCount = eventModel.ParticipantsCount,
                Date = eventModel.Date,
                Points = eventModel.Points,
                EventUsers = eventModel.EventUsers?.ToList(),
            };
        }

       public static Event ToEventFromCreateDTO(this CreateEventRequestDto eventDto)
        {
            return new Event
            {
                Title = eventDto.Title,
                Description = eventDto.Description,
                EventType = eventDto.EventType,
                ParticipantsCount = eventDto.ParticipantsCount,
                Date = eventDto.Date,
                Points = eventDto.Points
            };
        }

    }
}
