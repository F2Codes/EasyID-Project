import dotenv from "dotenv";

dotenv.config();

export const BOT_TOKEN = process.env.BOT_TOKEN!;

if (!BOT_TOKEN) {
    throw new Error("BOT_TOKEN is missing in .env");
}
