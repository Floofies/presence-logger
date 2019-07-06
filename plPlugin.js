"use strict";
const Composer = require('telegraf').Composer;
const config = require('../config');
if (!("plChat" in config)) throw new Error("presence-logger plugin not configured!");
const composer = new Composer();
function log(ctx, next) {
	const type = ctx.updateSubTypes[0] === "new_chat_members" ? "#joined" : "#left";
	ctx.telegram.sendMessage(config.plChat, type + " " + ctx.message.text + " " + ctx.chat.title);
	next();
}
composer.on([ 'new_chat_members', 'left_chat_member' ], log);
module.exports = composer;