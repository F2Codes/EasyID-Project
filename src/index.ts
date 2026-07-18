import { bot } from "./bot";
import { registerCommands } from "./commands";
bot.callbackQuery("my_id", async (ctx) => {
    await ctx.answerCallbackQuery();

    await ctx.reply(
`🆔 Your Telegram ID

${ctx.from.id}`
    );
});

bot.callbackQuery("help", async (ctx) => {
    await ctx.answerCallbackQuery();

    await ctx.reply(
`📚 Commands

/start
/help
/id

More features coming soon 🚀`
    );
});

bot.callbackQuery("updates", async (ctx) => {
    await ctx.answerCallbackQuery({
        text: "Updates channel will be added soon!"
    });
});

registerCommands(bot);

bot.start();

console.log("✅ Easy ID is running...");
bot.catch((err) => {
    console.error(err);
});

import { InlineKeyboard, InlineQueryResultBuilder } from "grammy";

bot.on("inline_query", async (ctx) => {
    const query = ctx.inlineQuery.query.trim();

    const text = query.length > 0
        ? `🆔 <b>Telegram ID Lookup</b>

👤 User: ${query}

Reply to one of ${query}'s messages and use /whois or /deepscan to get detailed information.`
        : `🆔 <b>Easy ID</b>

Type a username after the bot name.

Example:
@EasyIDFaBot @username`;

    await ctx.answerInlineQuery([
        InlineQueryResultBuilder.article(
            "easy-id",
            "🆔 Get ID",
            {
                reply_markup: new InlineKeyboard(),
                message_text: text,
                parse_mode: "HTML",
            }
        ),
    ], {
        cache_time: 0,
        is_personal: true,
    });
});

bot.on("message:sticker", async (ctx) => {
    await ctx.reply(ctx.msg.sticker.file_id);
});
