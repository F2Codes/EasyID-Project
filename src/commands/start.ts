import { Bot } from "grammy";
import { startKeyboard } from "../keyboards/start";

export function registerStart(bot: Bot) {
    bot.command("start", async (ctx) => {
        await ctx.reply(
`👋 Welcome to Easy ID

The easiest way to get Telegram IDs.

✨ Features

• 👤 User IDs
• 👥 Group IDs
• 📢 Channel IDs
• 💬 Message IDs
• 📎 File IDs

👇 Choose an option below.`,
            {
                reply_markup: startKeyboard
            }
        );
    });
}
