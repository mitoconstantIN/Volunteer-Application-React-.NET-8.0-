using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class AdministratorRepository : GenericRepository<Administrator>, IAdministratorRepository
    {
        public AdministratorRepository(webapiContext DBContext) : base(DBContext)
        {

        }
    }
}
