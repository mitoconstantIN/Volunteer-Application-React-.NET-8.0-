using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class AchievementRepository : GenericRepository<Achievement>, IAchievementRepository
    {
        public AchievementRepository(webapiContext DBContext) : base(DBContext)
        {
            
        }

        public IEnumerable<Achievement> GetByVolunteeerEmail(string email)
        {
            return DBContext.Achievements.Where(a => a.VolunteerEmail == email);
        }
    }
}
