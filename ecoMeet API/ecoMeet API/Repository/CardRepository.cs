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

        async Task<Card> ICardRepository.CreateAsync(Card cardModel)
        {
            await _context.Cards.AddAsync(cardModel);
            await _context.SaveChangesAsync();
            return cardModel;
        }
        public async Task DeleteAsync(int id)
        {
            var card = await _context.Cards.FindAsync(id);
            if (card != null)
            {
                _context.Cards.Remove(card);
                await _context.SaveChangesAsync();
            }
        }
    }
}
