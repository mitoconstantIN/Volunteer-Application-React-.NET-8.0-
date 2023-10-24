using WebAPI.Data;

namespace WebAPI.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        protected readonly webapiContext DBContext;

        private IVolunteerRepository volunteers;
        private IAchievementRepository achievements;
        private IAdministratorRepository administrators;
        private IOrganizerRepository organizers;
        private ICollaboratorRepository collaborators;
        private IEventRepository events;
        private IShop_itemRepository shop_items;

        public UnitOfWork(webapiContext context)
        {
            DBContext = context;
        }

        
        public IVolunteerRepository Volunteers
        {
            get
            {
                if (volunteers == null)
                {
                    volunteers = new VolunteerRepository(DBContext);
                }
                    
                return volunteers;
            }
        }

        public IAchievementRepository Achievements
        {
            get
            {
                if (achievements == null)
                {
                    achievements = new AchievementRepository(DBContext);
                }

                return achievements;
            }
        }

        public IAdministratorRepository Administrators
        {
            get
            {
                if (administrators == null)
                {
                    administrators = new AdministratorRepository(DBContext);
                }

                return administrators;
            }
        }
        public IOrganizerRepository Organizers
        {
            get
            {
                if (organizers == null)
                {
                    organizers = new OrganizerRepository(DBContext);
                }

                return organizers;
            }
        }
        public ICollaboratorRepository Collaborators
        {
            get
            {
                if (collaborators == null)
                {
                    collaborators = new CollaboratorRepository(DBContext);
                }

                return collaborators;
            }
        }

        public IEventRepository Events
        {
            get
            {
                if (events == null)
                {
                    events = new EventRepository(DBContext);
                }

                return events;
            }
        }

        public IShop_itemRepository Shop_items
        {
            get
            {
                if (shop_items == null)
                {
                    shop_items = new Shop_itemRepository(DBContext);
                }

                return shop_items;
            }
        }

        public int Save()
        {
           return DBContext.SaveChanges();
        }

        public void Dispose()
        {
            DBContext.Dispose();
        }
    }
}
