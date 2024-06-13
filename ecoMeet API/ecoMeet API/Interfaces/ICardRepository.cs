using ecoMeet_API.Models;

namespace ecoMeet_API.Interfaces
{
    public interface ICardRepository
    {
       public Task<List<Card>> GetAllAsync();
       public Task<Card?> GetByIdAsync(int id);
    }
}
