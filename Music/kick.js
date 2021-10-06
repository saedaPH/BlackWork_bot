module.exports = {
    name: 'kick',
    Description: 'This is a kick command, yay!',
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            const membersTarget = message.guild.members.cache.get(target.id)
            membersTarget.kick();
            message.channel.send(`succesfully kicked ${target.tag}`)
        } else {
            message.channel.send('could not kicked member!')
        }
    }
} 
