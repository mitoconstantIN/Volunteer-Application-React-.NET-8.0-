using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollaboratorController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CollaboratorController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <CollaboratorController>/GetCollaborators
        [HttpGet("GetAllCollaborators")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Collaborator>> Get()
        {
            var list = _unitOfWork.Collaborators.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <CollaboratorController>/GetCollaborator/ex@email.com
        [HttpGet("GetCollaboratorByEmail")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Collaborator> GetCollaboratorByEmail(string email)
        {
            var entity = _unitOfWork.Collaborators.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // POST <CollaboratorController>/CreateCollaborator
        [HttpPost("CreateCollaborator")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateCollaborator(Collaborator collaborator)
        {
            var entity = new Collaborator()
            {
                Email = collaborator.Email,
                Password = collaborator.Password,
                OrganizationName = collaborator.OrganizationName,
                AdministratorId = collaborator.AdministratorId,
            };

            try
            {
                _unitOfWork.Collaborators.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetCollaboratorByEmail), new { Email = entity.Email }, entity);
        }

        // PUT <CollaboratorController>/UpdateCollaborator
        [HttpPut("UpdateCollaborator")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateCollaborator(Collaborator collaborator)
        {
            var entity = _unitOfWork.Collaborators.GetById(collaborator.Email);

            entity.Email = collaborator.Email;
            entity.Password = collaborator.Password;
            entity.OrganizationName = collaborator.OrganizationName;
            entity.AdministratorId = collaborator.AdministratorId;

            _unitOfWork.Collaborators.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        // DELETE <CollaboratorController>/DeleteCollaborator/ex@email.com
        [HttpDelete("DeleteCollaborator")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult DeleteCollaborator(string email)
        {
            var entity = _unitOfWork.Collaborators.GetById(email);
            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Collaborators.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
    }
}
