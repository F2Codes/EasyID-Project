import { Bot } from "grammy";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function registerDeepScan(bot: Bot) {
    bot.command("deepscan", async (ctx) => {
        const target = ctx.msg?.reply_to_message?.from ?? ctx.from;

await ctx.replyWithSticker(
    "CAACAgIAAxkBAANoalugLxO5gWeBkmGB3gXMX_PEAkQAAq8lAAKbonBLuDnFfbteCGY9BA",
    {
        reply_parameters: {
            message_id: ctx.msg.message_id,
        },
    }
);

        const photos = await ctx.api.getUserProfilePhotos(target.id, {
            limit: 1,
        });

        const report = `
🛰 <b>DEEP SCAN REPORT</b>

━━━━━━━━━━━━━━

👤 <b>Name:</b> ${target.first_name}

📛 <b>Username:</b> ${
    target.username ? "@" + target.username : "None"
}

🆔 <b>User ID:</b>
<code>${target.id}</code>

🌍 <b>Language:</b>
${target.language_code ?? "Unknown"}

⭐ <b>Premium:</b>
${target.is_premium ? "Yes ✅" : "No ❌"}

🤖 <b>Bot:</b>
${target.is_bot ? "Yes" : "No"}

🖼 <b>Profile Photos:</b>
${photos.total_count}

💬 <b>Chat ID:</b>
<code>${ctx.chat.id}</code>

🏷 <b>Chat Type:</b>
${ctx.chat.type}

🆔 <b>Message ID:</b>
<code>${ctx.msg.message_id}</code>

━━━━━━━━━━━━━━

🚀 Powered by Easy ID
`;

        if (photos.total_count > 0) {
            const fileId =
                photos.photos[0][photos.photos[0].length - 1].file_id;

            return ctx.replyWithPhoto(fileId, {
                caption: report,
                parse_mode: "HTML",
            });
        }

        return ctx.reply(report, {
            parse_mode: "HTML",
        });
    });
}
