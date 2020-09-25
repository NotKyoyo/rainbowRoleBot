

const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const prefix = config.prefix;
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;

client.on("ready", () => {

    function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let guild = client.guilds.cache.get("618307548465987596")
      let theRole = guild.roles.cache.get(`${role}`);
      theRole.edit({color: random}).catch(e => {
        return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }

  const logchannel = client.channels.cache.get('759152662141992990');
    client.user.setActivity('master', { type: 'LISTENING' });
    logchannel.send("Booted");

    setInterval(() => { discoRole(); }, config.ms);
    logchannel.send("```css\nDiscoing...```");
  

});

client.on("message", message =>{
  if(message.content === prefix + "servername"){
      if(message.channel.type === "dm" || message.channel.type === "group") return;
      else if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD") || !message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":x: **Vous ou le bot manquez de perm (Permission requise : ** `MANAGE_GUILD`").catch(e => {});
      else setInterval(function () {message.guild.setName("input the first server name"); message.guild.setName("input the second")}, 2000)

  }
})

client.on("message", message => {
 const logchannelll = client.channels.cache.get('759152662141992990');


  if(message.content.startsWith(prefix + "start")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.send("```css\nDiscoing...```");
  } else {
    message.reply(`You do not have permission to use me.`);
  }
} else

if(message.content.startsWith(prefix + "stop")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.send("I've stopped discoing.");
  logchannelll.send("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to use me.`);
  }
}

});

client.login(config.token);
