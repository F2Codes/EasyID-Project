import { Bot } from "grammy";

export function registerHelp(bot: Bot) {
  bot.command("help", async (ctx) => {
    await ctx.reply(
`📚 Commands

/start - Welcome
/help - Help
/id - Your ID

More features are coming soon 🚀`
    );
  });
}
