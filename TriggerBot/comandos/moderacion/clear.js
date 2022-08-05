const Discord = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["purge"], 

execute (client, message, args){

  const botperms = message.guild.me.permissions.has("MANAGE_MESSAGES")

if(!botperms) return message.channel.send("No tengo permisos para eliminar mensajes")

var perms = message.member.permissions.has("MANAGE_MESSAGES")
if(!perms) return message.channel.send("No tienes permisos para eliminar mensajes")

  const valor = parseInt(args[0]);

  if(!valor) return message.channel.send("Debes escribir una cantidad de mensajes para eliminar.")
if(valor >= 100) return message.channel.send("No puedo eliminar mas de 99 mensajes a la vez!")

message.channel.bulkDelete(valor + 1); 


setTimeout(function(){ 
  

message.channel.send(`Se han eliminado **${valor}** mensajes correctamente!`).then(msg => {
    setTimeout(function(){ 
            msg.delete()
        }, 10000)
})

 }, 2000);
}
}