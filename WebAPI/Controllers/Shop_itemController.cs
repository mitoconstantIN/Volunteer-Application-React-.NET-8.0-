using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Shop_itemController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public Shop_itemController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <Shop_itemController>/GetShopitems
        [HttpGet("GetShopitems")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Shop_item>> Get()
        {
            var list = _unitOfWork.Shop_items.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <Shop_itemController>/GetShopitem/5
        [HttpGet("GetShopitem/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Shop_item> GetShop_itemById(int id)
        {
            var entity = _unitOfWork.Shop_items.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // POST <Shop_itemController>/CreateShopitem
        [HttpPost("CreateShopitem")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateShop_item([FromBody] Shop_item shop_item)
        {
            var entity = new Shop_item()
            {
                Id = shop_item.Id,
                Name = shop_item.Name,
                Price = shop_item.Price,
                Description = shop_item.Description,
                CollaboratorEmail = shop_item.CollaboratorEmail
            };
            
            try
            {
                _unitOfWork.Shop_items.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }


            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetShop_itemById), new { Id = entity.Id }, entity);
        }

        // PUT <Shop_itemController>/UpdateShopitem
        [HttpPut("UpdateShopitem")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateShop_item([FromBody] Shop_item shop_item)
        {
            var entity = _unitOfWork.Shop_items.GetById(shop_item.Id);

            entity.Name = shop_item.Name;
            entity.Price = shop_item.Price;
            entity.Description = shop_item.Description;

            _unitOfWork.Shop_items.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        // DELETE <Shop_itemController>/DeleteShopitem/5
        [HttpDelete("DeleteShopitem/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult Delete(int id)
        {
            var entity = _unitOfWork.Shop_items.GetById(id);
            
            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Shop_items.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
    }
}
