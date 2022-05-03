const { MessageEmbed } = require('discord.js');

module.exports = {
    nombre: 'getconnections',
    alias: [],
    descripcion: 'Request de la Raspberry',
    run: (client, message, args) => {
        // Tener la (DAY-MONTH-YEAR_HOUR:MINUTE:SECONDS_output.txt)
        var embed = new MessageEmbed()
        .setColor('#00b303')
        .setTitle('Generando archivo...')
        .setDescription('Estamos trabajando en tu petición, ¡Ten paciencia!')
        .setFooter({ text: 'Pedido por: ' + message.author.username, iconURL: message.author.iconURL })
        
        message.channel.send(embed).then(msg => {
            setTimeout(() => {
                msg.delete();
                setTimeout(() => {
                    // Attach txt document.
                }, 3000);
            }, 10000);
        });
    }
}
