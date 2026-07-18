import { Bot } from "grammy";

export function registerId(bot: Bot) {
    bot.command("id", async (ctx) => {
        const chat = ctx.chat;
        const user = ctx.from;

        // Reply information
        if (ctx.msg?.reply_to_message) {
            const replied = ctx.msg.reply_to_message.from;

            if (!replied) {
                return ctx.reply("❌ Couldn't get sender information.");
            }

            const photos = await ctx.api.getUserProfilePhotos(replied.id, {
                limit: 1,
            });

            const text = `
💬 <b>Reply Information</b>

👤 <b>Name:</b> ${replied.first_name}

📛 <b>Username:</b> ${
                replied.username ? "@" + replied.username : "None"
            }

🆔 <b>User ID:</b> <code>${replied.id}</code>

🆔 <b>Message ID:</b> <code>${ctx.msg.reply_to_message.message_id}</code>

🤖 <b>Bot:</b> ${replied.is_bot ? "Yes" : "No"}
`;

            if (photos.total_count > 0) {
                const fileId =
                    photos.photos[0][photos.photos[0].length - 1].file_id;

                return ctx.replyWithPhoto(fileId, {
                    caption: text,
                    parse_mode: "HTML",
                });
            }

            return ctx.reply(text, {
                parse_mode: "HTML",
            });
        }

        // Private chat
        if (chat.type === "private") {
            const photos = await ctx.api.getUserProfilePhotos(user.id, {
                limit: 1,
            });

            const mention = `<a href="tg://user?id=${user.id}">${user.first_name}</a>`;

            const text = `
👤 <b>User Information</b>

🆔 <b>User ID:</b> <code>${user.id}</code>

👤 <b>Name:</b> ${user.first_name}

📛 <b>Username:</b> ${
                user.username ? "@" + user.username : "None"
            }

🌍 <b>Language:</b> ${user.language_code ?? "Unknown"}

⭐ <b>Premium:</b> ${user.is_premium ? "Yes ✅" : "No ❌"}

🤖 <b>Bot:</b> ${user.is_bot ? "Yes" : "No"}

🔗 <b>Mention:</b> ${mention}
`;

            if (photos.total_count > 0) {
                const fileId =
                    photos.photos[0][photos.photos[0].length - 1].file_id;

                return ctx.replyWithPhoto(fileId, {
                    caption: text,
                    parse_mode: "HTML",
                });
            }

            return ctx.reply(text, {
                parse_mode: "HTML",
            });
        }

        // Group & Supergroup
        if (chat.type === "group" || chat.type === "supergroup") {
            return ctx.reply(
                `
👥 <b>Group Information</b>

🆔 <b>Group ID:</b> <code>${chat.id}</code>

📛 <b>Title:</b> ${chat.title}

👤 <b>Your ID:</b> <code>${user.id}</code>

👤 <b>Your Name:</b> ${user.first_name}
`,
                {
                    parse_mode: "HTML",
                }
            );
        }

        // Channel
        if (chat.type === "channel") {
            return ctx.reply(
                `
📢 <b>Channel Information</b>

🆔 <b>Channel ID:</b> <code>${chat.id}</code>

📛 <b>Title:</b> ${chat.title}
`,
                {
                    parse_mode: "HTML",
                }
            );
        }
    });
}
