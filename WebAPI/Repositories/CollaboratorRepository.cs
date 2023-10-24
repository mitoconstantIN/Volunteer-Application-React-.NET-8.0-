using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class CollaboratorRepository : GenericRepository<Collaborator>, ICollaboratorRepository
    {
        public CollaboratorRepository(webapiContext DBContext) : base(DBContext)
        {

        }
    }
}
