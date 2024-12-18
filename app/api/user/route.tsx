// Sample get api request handling query params
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  return Response.json({ user: { name } });
};
