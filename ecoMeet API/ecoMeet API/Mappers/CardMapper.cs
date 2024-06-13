using ecoMeet_API.Dtos.Card;
using ecoMeet_API.Models;

namespace ecoMeet_API.Mappers
{
    public static class CardMapper
    {
        public static CardDto ToCardDto( this Card cardModel)
        {
            return new CardDto
            {
                Id = cardModel.Id,
                Title = cardModel.Title,
                Points = cardModel.Points,
                ImageUrl = cardModel.ImageUrl,
                Description = cardModel.Description
            };
        }
    }
}
