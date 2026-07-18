import { InlineKeyboard } from "grammy";

export const startKeyboard = new InlineKeyboard()
    .text("🆔 My ID", "my_id")
    .row()
    .text("ℹ️ Help", "help")
    .text("📢 Updates", "updates");
