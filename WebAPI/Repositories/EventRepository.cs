using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class EventRepository : GenericRepository<Event>, IEventRepository
    {
        public EventRepository(webapiContext context) : base(context)
        {
        }

        public IEnumerable<Event> GetPastEventsByVolunteer(Volunteer volunteer)
        {
            return DBContext.Events.Where(v => v.VolunteersEmails.Contains(volunteer) && v.DateEnd.CompareTo(DateTime.Now)<0);
        }

        public IEnumerable<Event> GetEventsByVolunteer(Volunteer volunteer)
        {
            return DBContext.Events.Where(v => v.VolunteersEmails.Contains(volunteer));
        }
    }
}
