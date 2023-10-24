using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IAchievementRepository : IGenericRepository<Achievement>
    {
        IEnumerable<Achievement> GetByVolunteeerEmail(string email);
    }
}
