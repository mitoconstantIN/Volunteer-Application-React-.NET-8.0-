using ecoMeet_API.Data;
using ecoMeet_API.Dtos.Card;
using ecoMeet_API.Dtos.Event;
using ecoMeet_API.Interfaces;
using ecoMeet_API.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace ecoMeet_API.Controllers
{
    [Route("api/card")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly ICardRepository _cardRepo;
        public CardController(ICardRepository cardRepo)
        {
            _cardRepo = cardRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var cards = await _cardRepo.GetAllAsync();

            var cardDto = cards.Select(s => s.ToCardDto());

            return Ok(cardDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var card = await _cardRepo.GetByIdAsync(id);

            if (card == null)
            {
                return NotFound();
            }

            return Ok(card.ToCardDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateCardRequestDto cardDto)
        {
            var cardModel = cardDto.ToCardFromCreateDTO();
            await _cardRepo.CreateAsync(cardModel);
            return CreatedAtAction(nameof(GetById), new { id = cardModel.Id }, cardModel.ToCardDto());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById([FromRoute] int id)
        {
            var card = await _cardRepo.GetByIdAsync(id);

            if (card == null)
            {
                return NotFound();
            }

            await _cardRepo.DeleteAsync(id);

            return NoContent();
        }
        //[HttpPost]
        //public async Task<IActionResult> Create([FromRoute] int )
    }
}
