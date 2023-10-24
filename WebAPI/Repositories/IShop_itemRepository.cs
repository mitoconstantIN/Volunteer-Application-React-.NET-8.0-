using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IShop_itemRepository : IGenericRepository<Shop_item>
    {
        public void CreateShop_item(Shop_item shop_item);
    }
}
