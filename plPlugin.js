"use strict";
const Composer = require('telegraf').Composer;
const config = require('../config');
if (!("plChat" in config)) throw new Error("presence-logger plugin not configured!");
const composer = new Composer();
function getUsername(user) {
	return user.first_name + " " + user.last_name + " (" + user.username + ")";
}
function log(ctx, next) {
	const chat = ctx.chat.title;
	if (ctx.updateSubTypes[0] === "new_chat_members") ctx.telegram.sendMessage(
		config.plChat,
		ctx.message.new_chat_members.map(getUsername).join(", ") + " #joined " + chat
	);
	else ctx.telegram.sendMessage(
		config.plChat,
		getUsername(ctx.message.left_chat_member) + " #left " + chat
	);
	next();
}
composer.on(['new_chat_members', 'left_chat_member'], log);
module.exports = composer;