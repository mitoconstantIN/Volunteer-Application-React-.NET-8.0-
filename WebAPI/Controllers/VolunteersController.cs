using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using WebAPI.Data;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteerController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public VolunteerController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <VolunteerController>/GetVolunteers
        [HttpGet("GetVolunteers")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Volunteer>> Get()
        {
            var list = _unitOfWork.Volunteers.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <VolunteerController>/GetVolunteer/ex@email.com
        [HttpGet("GetVolunteer/{email}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Volunteer> GetVolunteerByEmail(string email)
        {
            var entity = _unitOfWork.Volunteers.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // POST <VolunteerController>/CreateVolunteer
        [HttpPost("CreateVolunteer")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateVolunteer(Volunteer volunteer)
        {
            var entity = new Volunteer()
            {
                Email = volunteer.Email,
                Password = volunteer.Password,
                Username = volunteer.Username,
                FirstName = volunteer.FirstName,
                LastName = volunteer.LastName,
                City = volunteer.City,
            };

            try
            {
                _unitOfWork.Volunteers.Create(entity);
                _unitOfWork.Save();
            }
            catch(Exception e)
            {
                return BadRequest();
            }

            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetVolunteerByEmail), new { Email = entity.Email }, entity);
        }

        // PUT <VolunteerController>/UpdateVolunteer
        [HttpPut("UpdateVolunteer")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateVolunteer(Volunteer volunteer)
        {
            var entity = _unitOfWork.Volunteers.GetById(volunteer.Email);

            entity.Password = volunteer.Password;
            entity.Username = volunteer.Username;
            entity.FirstName = volunteer.FirstName;
            entity.LastName = volunteer.LastName;
            entity.City = volunteer.City;
            entity.Level = volunteer.Level;
            entity.Points = volunteer.Points;

            _unitOfWork.Volunteers.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        // DELETE <VolunteerController>/DeleteVolunteer/ex @email.com
        [HttpDelete("DeleteVolunteer/{email}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult DeleteVolunteer(string email)
        {
            var entity = _unitOfWork.Volunteers.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Volunteers.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
        
    }
}
