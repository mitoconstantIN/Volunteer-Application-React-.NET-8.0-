using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizerController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public OrganizerController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <OrganizerController>/GetOrganizers
        [HttpGet("GetAllOrganizers")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Organizer>> Get()
        {
            var list = _unitOfWork.Organizers.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <OrganizerController>/GetOrganizer/ex@email.com
        [HttpGet("GetOrganizerByEmail")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Organizer> GetOrganizerByEmail(string email)
        {
            var entity = _unitOfWork.Organizers.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // POST <OrganizerController>/CreateOrganizer
        [HttpPost("CreateOrganizer")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateOrganizer(Organizer organizer)
        {
            var entity = new Organizer()
            {
                Email = organizer.Email,
                Password = organizer.Password,
                OrganizationName = organizer.OrganizationName,
                City = organizer.City,
                AdministratorId = organizer.AdministratorId
            };

            try
            {
                _unitOfWork.Organizers.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetOrganizerByEmail), new { Email = entity.Email }, entity);
        }

        // PUT <OrganizerController>/UpdateOrganizer
        [HttpPut("UpdateOrganizer")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateOrganizer(Organizer organizer)
        {
            var entity = _unitOfWork.Organizers.GetById(organizer.Email);

            entity.Email = organizer.Email;
            entity.Password = organizer.Password;
            entity.OrganizationName = organizer.OrganizationName;
            entity.City = organizer.City;
            entity.AdministratorId = organizer.AdministratorId;

            _unitOfWork.Organizers.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        // DELETE <OrganizerController>/DeleteOrganizer/ex@email.com
        [HttpDelete("DeleteOrganizer")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult DeleteOrganizer(string email)
        {
            var entity = _unitOfWork.Organizers.GetById(email);
            
            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Organizers.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
    }
}
