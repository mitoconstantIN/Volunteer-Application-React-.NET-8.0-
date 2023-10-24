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
    public class AdministratorController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AdministratorController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <AdministratorController>/GetAdministrators
        [HttpGet("GetAdministrators")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Administrator>> Get()
        {
            var list = _unitOfWork.Administrators.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <AdministratorController>/GetAdministrator/5
        [HttpGet("GetAdministratorById")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult<Administrator> GetAdministratorById(int id)
        {
            Administrator entity;

            try
            {
               entity = _unitOfWork.Administrators.GetById(id);

            }
            catch
            {
                return BadRequest();
            }
            

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // POST <AdministratorController>/CreateAdministrator
        [HttpPost("CreateAdministrator")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateAdministrator(Administrator administrator)
        {
            var entity = new Administrator()
            {
                Email = administrator.Email,
                FirstName = administrator.FirstName,
                LastName = administrator.LastName,
                PhoneNumber = administrator.PhoneNumber,
            };

            try
            {
                _unitOfWork.Administrators.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetAdministratorById), new { Email = entity.Email }, entity);
        }

        // PUT <AdministratorController>/UpdateAdministrator
        [HttpPut("UpdateAdministrator")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateAdministrator(Administrator administrator)
        {
            Administrator entity = _unitOfWork.Administrators.GetById(administrator.Id);

            if(entity == null)
            {
                return NotFound();
            }

            entity.Email = administrator.Email;
            entity.FirstName = administrator.FirstName;
            entity.LastName = administrator.LastName;
            entity.PhoneNumber = administrator.PhoneNumber;

            _unitOfWork.Administrators.Update(entity);
            _unitOfWork.Save();

            return Ok(entity);
        }

        // DELETE <AdministratorController>/DeleteAdministrator/5
        [HttpDelete("DeleteAdministrator")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult DeleteAdministrator(int id)
        {
            var entity = _unitOfWork.Administrators.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Administrators.Delete(entity);
            _unitOfWork.Save();

            return Ok(entity);
        }
    }
}
