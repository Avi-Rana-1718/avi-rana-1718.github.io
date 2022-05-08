const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
let Discord = require("discord.js");
let client = new Discord.Client();
const prefix = "^";

                  
client.on("ready", () => {
  console.log("Bot is ready!");

  client.user.setPresence({ activity: { name: "^help" } });
});

// MEMBER JOINS
client.on("guildMemberAdd", async member => {
  let wembed = new Discord.MessageEmbed()
  .setTitle(`Welcome to **${member.guild.name}**!`)
    .setColor("#00ff00")
.setDescription(`${member.user.toString()} joined the server! Enjoy your stay.`)
  .setTimestamp();
  member.guild.channels.cache.find(c => c.name == "welcome").send(wembed);  
});


// MEMBER LEAVES
client.on("guildMemberRemove", async member => {
  let lembed = new Discord.MessageEmbed()
  .setColor("#ff0000")
.setDescription(`${member.user.toString()} left the server!`)
  .setTimestamp();
  member.guild.channels.cache.find(c => c.name == "log").send(lembed);
});
// COMMAND - HELP
client.on("message", async (message) => {
  if (message.content == `${prefix}help`) {
let hembed = new Discord.MessageEmbed()
    .setAuthor("Help", "https://media.discordapp.net/attachments/798241715663798275/905102990850007100/crown.png", "https://media.discordapp.net/attachments/798241715663798275/905102990850007100/crown.png")
  .setColor("#59C7FF")
  .addFields(
    {name:"👋 __Welcomer__", value:`${prefix}help welcomer`},
    {name:"📔 __Logging__", value:`${prefix}help logging`},
    {name:"🎲 __Misc__", value:`${prefix}help misc`}
    );
    message.channel.send(hembed);
  }
// COMMAND HELP WELCOMER
if (message.content == `${prefix}help welcomer`) {
let hwembed = new Discord.MessageEmbed()
  .setTitle("Welcomer")
  .setColor("#59C7FF")
  .setDescription("Welcome alerts will automatically be send to a channel named `welcome`.");
    message.channel.send(hwembed);
  }
  // COMMAND HELP MISC
if (message.content == `${prefix}help misc`) {
let hwembed = new Discord.MessageEmbed()
  .setTitle("Misc")
  .setColor("#59C7FF")
  .addFields(
    {name:"^warn", value:"A simple warn command"},
    {name:"^serverinfo", value:"A server info command"},
    {name:"^botinfo", value:"Info about the bot"}
    )
    message.channel.send(hwembed);
}
  // COMMAND HELP LOGGING
if (message.content == `${prefix}help logging`) {
let hlembed = new Discord.MessageEmbed()
  .setTitle("Logging")
  .setColor("#59C7FF")
  .setDescription("All alerts will automatically be send to a channel named `log`.");
    message.channel.send(hlembed);
  }
  // COMMAND WARN
  if (message.content.startsWith(`${prefix}warn`))
  {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      let msgArgs = message.content.split(" ")
        let mention = message.mentions.users.first()
      let reason = (msgArgs[3]) ? message.content.substring(msgArgs.slice(0, 3).join(" ").length + 1) : "No reason provided";
      if (!mention) message.reply("Please mention someone.")
    else {
     let wmembed = new Discord.MessageEmbed()
  .setColor("#eed202")
  .addFields(
    {name:"Warned", value:`${mention}`},
    {name:"By", value:`${message.author.toString()}`},
    {name:`Reason`, value:`${reason}`}
    )
        .setTimestamp();
    message.channel.send(wmembed); 
    
    }
    }
  }
// COMMAND - BOT INFO
  if (message.content == `${prefix}botinfo`) {
    let biembed = new Discord.MessageEmbed()
        .setColor("#59C7FF")
       .setDescription("A discord bot for newbies!")
    .addFields(
      {name:"Made by", value:"Avi#1063"},
      {name:"Prefix", value:"^", inline:true},
      {name:"Ping", value:`${Math.round(client.ws.ping)}ms`,  
 inline:true},
      {name:"Made in", value:"discord.js@^12.5"},
      {name:"Hosted on", value:"repl.it"}
    )
  .setTimestamp();
message.channel.send(
    biembed);
  }
// COMMAND - SERVER INFO
  if (message.content == `${prefix}serverinfo`) {
    var serverIcon = message.guild.iconURL();

    const gembed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Server Info")
      .setThumbnail(serverIcon)
      .addFields(
        { name: "Name", value: `${message.guild.name}` },
        { name: "ID", value: `${message.guild.id}` },
        {
          name: "Member Count",
          value: `${message.guild.memberCount}`,
          inline: true
        },
        { name: "Created On", value: `${message.guild.createdAt}` }
      )
      .setTimestamp();
    message.channel.send(gembed);
  }
  
});

client.login(process.env.token);
