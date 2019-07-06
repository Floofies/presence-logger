# Presence Logger for The Guard Bot 

A plugin for [The Devs Network Guard Bot](https://github.com/thedevs-network/the-guard-bot) which redirects member join/leave messages to a chat of your choosing.

## Installation

1. Put the `plPlugin.js` file into The Guard Bot `plugins` directory.
2. Open The Guard Bot `config.js` for editing.
3. In the `plugins` array, add a `plPlugin` string to it.
4. In the `chats` object, add a `plChat` key and set it to the Telegram chat ID you would like logs to be sent to.