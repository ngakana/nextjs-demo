import { Currency } from "@/types/Currency";
import { readFile } from "fs/promises";
import path from "path";

export async function getCurrencyList(): Promise<Currency[]> {
    const filePath = path.join(process.cwd(), "data", "currencyData.json");
    const file = await readFile(filePath, "utf-8");
    return JSON.parse(file);
}
