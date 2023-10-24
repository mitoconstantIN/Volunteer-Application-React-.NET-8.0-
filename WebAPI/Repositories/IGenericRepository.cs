using System.Linq.Expressions;

namespace WebAPI.Repositories
{
    public interface IGenericRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(object id);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
