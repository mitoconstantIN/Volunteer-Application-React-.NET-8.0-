using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public EventController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <EventController>/GetEvents
        [HttpGet("GetEvents")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Event>> Get()
        {
            var list = _unitOfWork.Events.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <EventController>/GetEvent/5
        [HttpGet("GetEvent/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Event> GetEventById(int id)
        {
            var entity = _unitOfWork.Events.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // GET <EventController>/GetEvent/ex@email.com
        [HttpGet("GetPastEventsByVolunteerEmail/{email}/")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Event>> GetPastEventsByVolunteerEmail(string email)
        {
            Volunteer volunteer = _unitOfWork.Volunteers.GetById(email);
            var list = _unitOfWork.Events.GetPastEventsByVolunteer(volunteer).ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <EventController>/GetEvent/ex@email.com
        [HttpGet("GetEventsByVolunteerEmail/{email}/")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Event>> GetEventsByVolunteerEmail(string email)
        {
            Volunteer volunteer = _unitOfWork.Volunteers.GetById(email);
            var list = _unitOfWork.Events.GetEventsByVolunteer(volunteer).ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        //If points given isn't given(for use in the API only), calculate amount
        // POST <EventController>/CreateEvent
        [HttpPost("CreateEvent")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateEvent([FromBody] Event _event)
        {
            int generatedPointsGiven = _event.PointsGiven != null ?
               (int)_event.PointsGiven : (int)(_event.DateEnd - _event.DateStart).TotalDays * _event.HoursPerDay;

            string organizationName;

            if(_unitOfWork.Organizers.GetById(_event.OrganizerEmail) != null)
            {
                organizationName = _unitOfWork.Organizers.GetById(_event.OrganizerEmail).OrganizationName;
            }
            else
            {
                return BadRequest();
            }

            var entity = new Event()
            {
                Id = _event.Id,
                Title = _event.Title,
                Location = _event.Location,
                Description = _event.Description,
                PointsGiven = generatedPointsGiven,
                Type = _event.Type,
                MaxParticipants = _event.MaxParticipants,
                DateStart = _event.DateStart,
                DateEnd = _event.DateEnd,
                HoursPerDay = _event.HoursPerDay,
                Sponsors = _event.Sponsors,
                OrganizerEmail = _event.OrganizerEmail,
                OrganizationName = organizationName
            };

            try
            {
                _unitOfWork.Events.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }


            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetEventById), new { Id = entity.Id }, entity);
        }

        // PUT <EventController>/UpdateEvent
        [HttpPut("UpdateEvent")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateEvent([FromBody] Event _event)
        {
            int generatedPointsGiven = _event.PointsGiven != null ?
               (int)_event.PointsGiven : (int)(_event.DateEnd - _event.DateStart).TotalDays * _event.HoursPerDay;

            string organizationName = _unitOfWork.Organizers.GetById(_event.OrganizerEmail).OrganizationName;

            var entity = _unitOfWork.Events.GetById(_event.Id);

            entity.Title = _event.Title;
            entity.Location = _event.Location;
            entity.Description = _event.Description;
            entity.PointsGiven = generatedPointsGiven;
            entity.Type = _event.Type;
            entity.MaxParticipants = _event.MaxParticipants;
            entity.DateStart = _event.DateStart;
            entity.DateEnd = _event.DateEnd;
            entity.HoursPerDay = _event.HoursPerDay;
            entity.Sponsors = _event.Sponsors;//can be null
            entity.OrganizerEmail = _event.OrganizerEmail;
            entity.OrganizationName = organizationName;

            _unitOfWork.Events.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        // DELETE <EventController>/DeleteEvent/5
        [HttpDelete("DeleteEvent/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult Delete(int id)
        {
            var entity = _unitOfWork.Events.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Events.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
    }
}
