const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

//1
const developers = ["490546269832609792","663432977581342750"]
const prefix1 = "1"
const prefix2 = "1"
const prefix3 = "1"
const prefix4 = "1"

client.on("message", message => {

            if (message.content.startsWith(`${prefix1}bc`)) {
    if (!developers.includes(message.author.id)) return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith(`${prefix1}setg`)) {
  client.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === (`${prefix1}leave`)) {
  message.guild.leave();        
} else  
if (message.content.startsWith(`${prefix1}setw`)) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix1}setl`)) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix1}sets`)) {
  client.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith(`${prefix1}setname`)) {
client.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(`${prefix1}setava`)) {
client.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

//2

client2.on("message", message => {

            if (message.content.startsWith(`${prefix2}bc`)) {
    if (!developers.includes(message.author.id)) return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


client2.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith(`${prefix2}setg`)) {
  client2.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === (`${prefix2}leave`)) {
  message.guild.leave();        
} else  
if (message.content.startsWith(`${prefix2}setw`)) {
client2.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix2}setl`)) {
client2.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix2}sets`)) {
  client2.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith(`${prefix2}setname`)) {
client2.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(`${prefix2}setava`)) {
client2.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

//3

client3.on("message", message => {

            if (message.content.startsWith(`${prefix3}bc`)) {
    if (!developers.includes(message.author.id)) return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


client3.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith(`${prefix3}setg`)) {
  client3.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === (`${prefix3}leave`)) {
  message.guild.leave();        
} else  
if (message.content.startsWith(`${prefix3}setw`)) {
client3.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix3}setl`)) {
client3.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix3}sets`)) {
  client3.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith(`${prefix3}setname`)) {
client3.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(`${prefix3}setava`)) {
client3.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
//4
client4.on("message", message => {

            if (message.content.startsWith(`${prefix4}bc`)) {
    if (!developers.includes(message.author.id)) return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});

client4.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith(`${prefix4}setg`)) {
  client4.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === (`${prefix4}leave`)) {
  message.guild.leave();        
} else  
if (message.content.startsWith(`${prefix4}setw`)) {
client4.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix4}setl`)) {
client4.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith(`${prefix4}sets`)) {
  client4.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith(`${prefix4}setname`)) {
client4.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(`${prefix4}setava`)) {
client4.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
