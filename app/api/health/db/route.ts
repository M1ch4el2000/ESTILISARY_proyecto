import { getDatabase } from "@/lib/db";

export async function GET() {
  const sql = getDatabase();
  const rows = await sql`SELECT 1 AS connected`;

  return Response.json({ connected: rows[0].connected === 1 });
}
