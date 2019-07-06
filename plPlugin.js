"use strict";
const config = require('../config');
if (!("plChat" in config.chats)) throw new Error("presence-logger plugin not configured!");
const chatID = config.chats.plChar;
function getUsername(user) {
	var str = "";
	if (user.first_name) str += user.first_name;
	if (user.last_name) str += " " + user.last_name;
	if (user.username) str += " @" + user.username;
	return str;
}
function log(ctx, next) {
	console.log("Middleware Running");
	if (ctx.updateSubTypes[0] === "new_chat_members") ctx.telegram.sendMessage(
		chatID,
		ctx.message.new_chat_members.map(getUsername).join(", ") + " #joined " + ctx.chat.title
	);
	else if (ctx.updateSubTypes[0] === "left_chat_member") ctx.telegram.sendMessage(
		chatID,
		getUsername(ctx.message.left_chat_member) + " #left " + ctx.chat.title
	);
	next();
}
module.exports = log;