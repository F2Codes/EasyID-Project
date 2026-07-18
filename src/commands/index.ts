import { Bot } from "grammy";
import { registerStart } from "./start";
import { registerHelp } from "./help";
import { registerId } from "./id";
import { registerWhois } from "./whois";
import { registerDeepScan } from "./deepscan";

export function registerCommands(bot: Bot) {
  registerStart(bot);
  registerHelp(bot);
  registerId(bot);
  registerWhois(bot);
  registerDeepScan(bot);
}

