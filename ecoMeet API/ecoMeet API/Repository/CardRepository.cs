using ecoMeet_API.Data;
using ecoMeet_API.Interfaces;
using ecoMeet_API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Immutable;

namespace ecoMeet_API.Repository
{
    public class CardRepository : ICardRepository
    {
        public readonly ApplicationDbContext _context;

        public CardRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Card>> GetAllAsync()
        {
            return await _context.Cards.ToListAsync();
        }

        public async Task<Card?> GetByIdAsync(int id)
        {
            return await _context.Cards.FindAsync(id);
        }
    }
}
