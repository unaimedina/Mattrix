const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client({ intents: ['GUILD_MESSAGES']});
const { Player } = require("discord-music-player");
const config = require("./config.json");

/*
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

client.config = config;
client.recognition = recognition;
client.speechRecognitionList = speechRecognitionList;
*/

const player = new Player(client, {
  leaveOnEmpty: false,
});

client.player = player;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.TOKEN);
