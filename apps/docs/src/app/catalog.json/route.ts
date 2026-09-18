import catalog from "earthling-ui/catalog.json";

export function GET() {
  return Response.json(catalog);
}
