using ecoMeet_API.Dtos.Event;
using ecoMeet_API.Models;

namespace ecoMeet_API.Interfaces
{
    public interface IEventRepository
    {
        Task<List<Event>> GetAllAsync();
        Task<Event?> GetByIdAsync(int id);
        Task<Event> CreateAsync(Event eventModel);
        Task<Event?> UpdateAsync(int id, UpdateEventRequestDto eventDto);
        Task<Event?> DeleteAsync(int id);
    }
}
