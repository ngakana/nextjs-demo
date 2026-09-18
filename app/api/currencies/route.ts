import { getCurrencyList } from "@/lib/data";

export async function GET() {
    const data = await getCurrencyList();
    return Response.json(data);
}