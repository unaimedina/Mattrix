module.exports = (client) => {
    console.log('Logged into: ' + client.user.tag)
    client.user.setActivity('como nos sacamos un 10 :)', {type: 'WATCHING'}); 
    // Viendo como nos sacamos un 10
}