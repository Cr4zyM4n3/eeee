const Discord = require("discord.js")
const superagent = require('superagent');
const cooldown = new Set()

module.exports = {
    name: "boobs",
    alias: ["tetas", "bb"],

    async execute (client, message, args){



    if(cooldown.has(message.author.id)){
        message.reply("`Por favor espera estas ejecutando comandos muy rapido!`")
    } else {

//////////////////// COMANDO AQUI //////////////////



try
{


    let subreddits = [
        "boobs",
        "Boobies",
        "Stacked",
        "BustyPetite",
        "bustyasians",
        "boltedontits",
        "burstingout"
    ]
    
    let reddit = subreddits[Math.floor(Math.random() * (subreddits.length - 1))];
    
    const data = await superagent.get(`https://meme-api.herokuapp.com/gimme/${reddit}`)
    
    if(!data) return interaction.reply({ content: "La API se cayo por favor comunicar al creador."})


    const embed = new Discord.MessageEmbed()
    .setTitle(`${data.body.title}`)
    .setDescription("Tetas / Boobs  **( • )( • )**")
    .setColor("RED")
    .setURL(`${data.body.postLink}`)
    .setImage(data.body.url)



    await message.reply({ embeds: [embed] });
    

}
catch (err)
{
    return Promise.reject(err);
}



////////////// FINAL DEL COMANDO ////////////////

        cooldown.add(message.author.id)
        setTimeout(function(){ 
    cooldown.delete(message.author.id)
        }, 3000);
    }
    


         } 
  } 



