import { NextRequest } from "next/server";

const rates: Record<string, Record<string, number>> = {
    "zar": {
        "usd": 0.06187,
        "gbp": 0.04577,
        "eur": 0.05333
    },
    "usd": {
        "zar": 16.1498,
        "gbp": 0.73977,
        "eur": 0.86182
    },
    "gbp": {
        "zar": 21.828,
        "usd": 1.3523,
        "eur": 1.1649
    },
    "eur": {
        "zar": 18.75,
        "usd": 1.16,
        "gbp": 0.8583
    }
}

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;

    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (!from && !to) {
        return Response.json(rates);
    }

    if (!from) {
        return new Response("Missing 'from' currency code", { status: 400 });
    }

    if (!to) {
        return new Response("Missing 'to' currency code", { status: 400 });
    }

    let rateRecord = rates[from.toLowerCase()];
    if (rateRecord === undefined) {
        return new Response("Invalid 'from' currency code", { status: 400 });
    }

    let rate = rateRecord[to.toLowerCase()];
    if (rate === undefined) {
        return new Response("Invalid 'to' currency code", { status: 400 });
    }

    return Response.json({ rate });
}