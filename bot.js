const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();


//1


client.on("message", message => {

            if (message.content.startsWith("1bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


const developers = ["648139155355992074","663432977581342750"]

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith('1setg')) {
  client.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === ("1leave")) {
  message.guild.leave();        
} else  
if (message.content.startsWith('1setw')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith('1setl')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith('1sets')) {
  client.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith('1setname')) {
client.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('1setava')) {
client.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

//2

client2.on("message", message => {

            if (message.content.startsWith("2bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


client2.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith('2setg')) {
  client2.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === ("2leave")) {
  message.guild.leave();        
} else  
if (message.content.startsWith('2setw')) {
client2.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith('2setl')) {
client2.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith('2sets')) {
  client2.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith('2setname')) {
client2.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('2setava')) {
client2.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

//3

client3.on("message", message => {

            if (message.content.startsWith("3bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


client3.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith('3setg')) {
  client3.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === ("3leave")) {
  message.guild.leave();        
} else  
if (message.content.startsWith('3setw')) {
client3.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith('3setl')) {
client3.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith('3sets')) {
  client3.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith('3setname')) {
client3.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('3setava')) {
client3.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
