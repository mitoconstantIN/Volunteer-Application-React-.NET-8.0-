using ecoMeet_API.Data;
using ecoMeet_API.Dtos.Event;
using ecoMeet_API.Interfaces;
using ecoMeet_API.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update.Internal;

namespace ecoMeet_API.Controllers
{
    [Route("api/event")]
    public class EventController: ControllerBase
    {
        private readonly IEventRepository _eventRepo;
        private readonly ApplicationDbContext _context;
        public EventController(ApplicationDbContext context, IEventRepository eventRepo)
        {
            _eventRepo = eventRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            var events = await _eventRepo.GetAllAsync();
            
            var eventDto = events.Select(s => s.ToEventDto());
                

            return Ok(events);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var eveniment = await _eventRepo.GetByIdAsync(id);


            if(eveniment == null)
            {
                return NotFound();
            }
            return Ok(eveniment.ToEventDto());

        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateEventRequestDto eventDto)
        {
            var eventModel = eventDto.ToEventFromCreateDTO();
            await _eventRepo.CreateAsync(eventModel);
            return CreatedAtAction(nameof(GetById), new { id = eventModel.Id }, eventModel.ToEventDto());

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateEventRequestDto updateDto)
        {
            var eventModel = await _eventRepo.UpdateAsync(id, updateDto);

            if(eventModel == null)
            {
                return NotFound();
            }

           

            return Ok(eventModel.ToEventDto());

        }

        [HttpDelete]
        [Route("{id}")]

        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var eventModel = await _eventRepo.DeleteAsync(id);
            if(eventModel == null)
            {
                return NotFound();
            }

            _context.Events.Remove(eventModel);

            await _context.SaveChangesAsync();

            return NoContent();

        }
    }
}
