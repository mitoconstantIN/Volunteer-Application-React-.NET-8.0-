using ecoMeet_API.Data;
using ecoMeet_API.Dtos.Event;
using ecoMeet_API.Interfaces;
using ecoMeet_API.Models;
using Microsoft.EntityFrameworkCore;

namespace ecoMeet_API.Repository
{
    public class EventRepository : IEventRepository
    {
        private readonly ApplicationDbContext _context;

        public EventRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Event> CreateAsync(Event eventModel)
        {
            await _context.Events.AddAsync(eventModel);
            await _context.SaveChangesAsync();
            return eventModel; 
        }

        public async Task<Event?> DeleteAsync(int id)
        {
            var eventModel = await _context.Events.FirstOrDefaultAsync(x => x.Id == id);
            if(eventModel == null)
            {
                return null;
            }
            _context.Events.Remove(eventModel);
            await _context.SaveChangesAsync();
            return eventModel;
        }

        public Task<List<Event>> GetAllAsync()
        {
            return _context.Events.ToListAsync();
        }

        public async Task<Event?> GetByIdAsync(int id)
        {
            return await _context.Events.FindAsync(id);
        }

        public async Task<Event?> UpdateAsync(int id, UpdateEventRequestDto eventDto)
        {
            var existingEvent = await _context.Events.FirstOrDefaultAsync(x => x.Id == id);

            if(existingEvent == null)
            {
                return null;
            }

            existingEvent.Title = eventDto.Title;
            existingEvent.Description = eventDto.Description;
            existingEvent.EventType = eventDto.EventType;
            existingEvent.ParticipantsCount = eventDto.ParticipantsCount;
            existingEvent.Date = eventDto.Date;
            existingEvent.Points = eventDto.Points;

            await _context.SaveChangesAsync();

            return existingEvent;
        }
    }
}
