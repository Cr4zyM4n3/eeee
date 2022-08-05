const Discord = require("discord.js")
const superagent = require('superagent');

module.exports = {
    name: "8ball",
    alias: ["8ball"],

    async execute (client, message, args){
      
        try
    {

        const question = args.join(" ");
        if(!question) message.channel.send("`Debes hacerme una pregunta!`")
        const replies = [
            "Si.",
            "No.",
            "Nunca.",
            "Definitivamente.",
            "Preguntame despues.",
            "Imaginate.", 
            "Obviamente no.",
            "Obvio.",
            "Preguntale a tu mama."
        ];
        const result = Math.floor(Math.random() * replies.length); 

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: "🎱 La bola 8 dice..." })
            .setColor("ORANGE")
            .addField("Pregunta:", question)
            .addField("Respuesta:", replies[result]);

        await message.reply({ embeds: [embed], ephemeral: false });
        return;
    }
    catch (err)
    {
        return Promise.reject(err);
    }

         }
  }