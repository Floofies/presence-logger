"use strict";
const Composer = require('telegraf').Composer;
const config = require('../config');
if (!("plChat" in config)) throw new Error("presence-logger plugin not configured!");
const composer = new Composer();
function log(ctx, next) {
	ctx.telegram.sendMessage(config.plChat, String(ctx.message + ctx.chat.id));
	next();
}
function configure(ctx, next) {
	if (ctx.message.text)
	const fs = require("fs");

	next();
}
composer.on([ 'new_chat_members', 'left_chat_member' ], log);
composer.on([ 'text' ], configure);
module.exports = composer;