"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_CONSTANTS = void 0;
const bot_js_1 = require("../bot.js");
const ALL_UPDATE_TYPES = [
    ...bot_js_1.DEFAULT_UPDATE_TYPES,
    "chat_member",
    "message_reaction",
    "message_reaction_count",
];
const ALL_CHAT_PERMISSIONS = {
    can_send_messages: true,
    can_send_audios: true,
    can_send_documents: true,
    can_send_photos: true,
    can_send_videos: true,
    can_send_video_notes: true,
    can_send_voice_notes: true,
    can_send_polls: true,
    can_send_other_messages: true,
    can_add_web_page_previews: true,
    can_react_to_messages: true,
    can_change_info: true,
    can_invite_users: true,
    can_edit_tag: true,
    can_pin_messages: true,
    can_manage_topics: true,
};
/**
 * A container for constants used in the Telegram Bot API. Currently holds all
 * available update types as well as all chat permissions.
 */
exports.API_CONSTANTS = {
    DEFAULT_UPDATE_TYPES: bot_js_1.DEFAULT_UPDATE_TYPES,
    ALL_UPDATE_TYPES,
    ALL_CHAT_PERMISSIONS,
};
Object.freeze(exports.API_CONSTANTS);
