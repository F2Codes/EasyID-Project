import { Bot } from "grammy";

export function registerWhois(bot: Bot) {
    bot.command("whois", async (ctx) => {
        if (!ctx.msg?.reply_to_message?.from) {
            return ctx.reply("❌ Reply to a user's message.");
        }

        const target = ctx.msg.reply_to_message.from;

        const photos = await ctx.api.getUserProfilePhotos(target.id, {
            limit: 1,
        });

        const caption = `
👤 <b>WHOIS</b>

👤 <b>Name:</b> ${target.first_name}

📛 <b>Username:</b> ${target.username ? "@" + target.username : "None"}

🆔 <b>User ID:</b> <code>${target.id}</code>

🌍 <b>Language:</b> ${target.language_code ?? "Unknown"}

⭐ <b>Premium:</b> ${target.is_premium ? "Yes ✅" : "No ❌"}

🤖 <b>Bot:</b> ${target.is_bot ? "Yes" : "No"}

🖼 <b>Profile Photos:</b> ${photos.total_count}
`;

        if (photos.total_count > 0) {
            return ctx.replyWithPhoto(
                photos.photos[0][photos.photos[0].length - 1].file_id,
                {
                    caption,
                    parse_mode: "HTML",
                }
            );
        }

        return ctx.reply(caption, {
            parse_mode: "HTML",
        });
    });
}
