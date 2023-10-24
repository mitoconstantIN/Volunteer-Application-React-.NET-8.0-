namespace WebAPI.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IAchievementRepository Achievements { get; }
        IVolunteerRepository Volunteers { get; }
        IAdministratorRepository Administrators { get; }
        IOrganizerRepository Organizers { get; }
        ICollaboratorRepository Collaborators { get; }
        IEventRepository Events { get; }
        IShop_itemRepository Shop_items { get; }
        int Save();
    }
}
