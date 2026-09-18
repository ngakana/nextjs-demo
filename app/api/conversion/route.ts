import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { amount, from, to } = await request.json();

    if (typeof amount !== "number" || isNaN(amount)) {
        return new Response("Invalid 'amount' value", { status: 400 });
    }

    const response = await fetch(`/api/rates?from=${from}&to=${to}`);
    const result = await response.json();
    if (!response.ok) {
        return new Response(result.message, { status: 500 });
    }

    const converted = amount * result.rate;
    return Response.json({ converted });
}