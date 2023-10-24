using WebAPI.Models;
using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class Shop_itemRepository : GenericRepository<Shop_item>, IShop_itemRepository
    {

        public Shop_itemRepository(webapiContext context) : base(context)
        {
        }

        public void CreateShop_item(Shop_item shop_item)
        {
            shop_item.CollaboratorEmailNavigation = DBContext.Collaborators.First(x => x.Email == shop_item.CollaboratorEmail);
            DBContext.Set<Shop_item>().Add(shop_item);
        }
    }
}
