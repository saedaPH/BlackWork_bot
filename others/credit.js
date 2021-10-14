const db = require('quick.db')
const Saeda = require('discord.js')
module.exports = {
    name:"credits",
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
      
        let credit = await db.fetch(`credit_${user.id}`)
        if(credit === null) {credit = 0}
        return message.channel.send(`${user.username}, have a ${credit} credits`)
        
    }   
}
