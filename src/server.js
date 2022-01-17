const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json")

client.on("ready", () => {
  console.log('O bot foi iniciado, com sucesso nos servidores.');
  client.user.setActivity('cortana');('Eu estou em ${client.guilds.cache.size} servidores');
});

//katchauu
client.on("message", async (msg) => {
  if (!msg.guild) return;
  if (!msg.content.startsWith(config.prefix)) return;
  
  if(msg.content === "cortana qual é a ordem para ler HP"){
    msg.channel.send("A ordem para ler é essa:")
    msg.channel.send("Harry Potter e a pedra filosofal")
    msg.channel.send("Harry Potter e a câmara secreta")
    msg.channel.send("Harry Potter e o prisioneiro de Azkaban")
    msg.channel.send("Harry Potter e o cálice de fogo")
    msg.channel.send("Harry Potter e a ordem da fênix")
    msg.channel.send("Harry Potter e o enigma do príncipe")
    msg.channel.send("Harry Potter e as relíquias da morte")
  } 
  
  if(msg.content === "cortana cronograma para o mes que vem"){
    msg.reply("ATIVIDADES DO MES DE FEVEREIRO"),
    msg.reply("ANIMES: **Shingueki**, **Vanitas** **no** **Carte** **2**, **Sono** **Bisque** **Doll**, **Tribe Nine**"),
    msg.reply("Jogos: **Parasite** **Eve**, **Rise** **of** **Tom** **Rider** "),
    msg.reply("Livros: **Anne** **com** **'E'** ")
  }
  
})

client.login(config.token);