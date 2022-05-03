const fs = require("fs");

var commands = ["connections", "toggle"];
/*
var recognition = client.recognition;

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'es-ES';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
*/
module.exports = {
  nombre: "connect",
  alias: [],
  descripcion: "Conectar al bot a la sala de voz para iniciar el speech.",
  run: (client, message, args) => {
    if (!channel) return;
    let queue = client.player.createQueue(message.guild.id);
    queue.join(message.member.voice.channel)
  },
};
/*
recognition.onresult = function(event) {
    var result = event.results.transcript;
}

recognition.onspeechend = function() {
    recognition.stop();
  }
  
  recognition.onnomatch = function(event) {
    console.log("I didn't recognise that command.");
  }
  
  recognition.onerror = function(event) {
    fs.writeFile('../errors/err_1', event.error, err => {
        if (err) console.log(err)
    });

    console.log("An error have been ocurred, check log: " + "/errors/err_1");
  }
  */
