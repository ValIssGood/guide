const Discord = require('discord.js');
const client = new Discord.Client();
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('ODAzNzU4NDgyNTcwMDg0Mzgz.YBCcaw.LtJPuy92jRnMpbMWy_9vQKK7Oho');
client.once('ready', () => {
	console.log('Ready!');
});

client.login('ODAzNzU4NDgyNTcwMDg0Mzgz.YBCcaw.LtJPuy92jRnMpbMWy_9vQKK7Oho');
