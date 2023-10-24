using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Collections.Generic;
using System.Linq.Expressions;
using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly webapiContext DBContext;
        private DbSet<T> _entities;

        public GenericRepository(webapiContext context)
        {
            DBContext = context;
            _entities = context.Set<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return _entities;
        }
        
        public T GetById(object id)
        {
            return _entities.Find(id);
        }

        public void Create(T entity)
        {
            _entities.Add(entity);
        }

        public void Update(T entity)
        {
            _entities.Attach(entity);
            DBContext.Entry(entity).State = EntityState.Modified;
        }

        public void Delete(T entity)
        {
            _entities.Remove(entity);
        }
        
    }
}
