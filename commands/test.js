module.exports = {
    nombre: 'template',
    alias: [],
    descripcion: 'Así es como se crean los comandos!',
    run: (client, message, args) => {
      client.channels.fetch("970991000011042828").then(channel => {
        message.channel.send("boas tardes")
    });
  }
}
