using Microsoft.Extensions.Primitives;

namespace ecoMeet_API.Middleware
{
    public class ApiKeyMiddleware
    {
        private readonly RequestDelegate _next;
        private const string APIKEYVALUES = "ApiKeys";
        private const string AUTHORIZATION_HEADER = "ApiKey";
        private const string AUTHORIZATION_PARAM = "auth-key";
        public ApiKeyMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            var extractedApiKey = new StringValues("");
            if (
                !context.Request.Headers.TryGetValue(AUTHORIZATION_HEADER, out extractedApiKey) &&
                !context.Request.Query.TryGetValue(AUTHORIZATION_PARAM, out extractedApiKey)
            )
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Api Key was not provided. ");
                return;
            }

            var appSettings = context.RequestServices.GetRequiredService<IConfiguration>();

            var apiKeysDictionary = appSettings.GetSection(APIKEYVALUES).GetChildren()
                  .ToDictionary(x => x.Key, x => x.Value);

            if (!apiKeysDictionary.ContainsValue(extractedApiKey))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Unauthorized client.");
                return;
            }

            await _next(context);
        }
    }
}
