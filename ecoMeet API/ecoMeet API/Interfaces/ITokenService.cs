using ecoMeet_API.Models;

namespace ecoMeet_API.Interfaces
{
    public interface ITokenService
    {
        public string CreateToken(User user);
    }
}
