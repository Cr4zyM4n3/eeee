const Discord = require('discord.js');

module.exports = {
  name: "say", 
  alias: ["di"], 

execute (client, message, args){

var perms = message.member.permissions.has("ADMINISTRATOR")
if(!perms) return message.channel.send("`No tienes permisos de administrador!`")

  const texto = args.join(" ")
if(!texto) return message.channel.send("Debes escribir un mensaje!")
  message.channel.send(texto)
message.delete()
}

} 
