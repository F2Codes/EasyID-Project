import { Bot } from "grammy";

export function registerAbout(bot: Bot) {
    bot.command("about", async (ctx) => {
        await ctx.reply(
`ℹ️ <b>About Easy ID</b>

Made with 💙 by <b>Matin</b>

🚀 <b>Version:</b> <code>v0.0.1 alpha</code>

💡 This is an open-source project, so feel free to fork and use it!

🔗 <b>GitHub:</b>
https://github.com/F2Codes/EasyID-Project

📢 <b>Channel:</b>
@IMatinDev`,
            {
                parse_mode: "HTML",
                disable_web_page_preview: true,
            }
        );
    });
}
