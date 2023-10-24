using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IEventRepository : IGenericRepository<Event>
    {
        public IEnumerable<Event> GetPastEventsByVolunteer(Volunteer volunteer);
        public IEnumerable<Event> GetEventsByVolunteer(Volunteer volunteer);
    }
}
