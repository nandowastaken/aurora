require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const regex = /\b\d+d\d+\b/;

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "Aurora") {
    message.reply("Eu!");
  }

  if (regex.test(message.content)) {
    const text = message.content;

    const info = text.split("d");
    const numOfRolls = parseInt(info[0]);
    const diceType = parseInt(info[1]);

    const diceResults = [];
    var totalSum = 0;

    for (var i = 0; i < numOfRolls; i++) {
      totalSum += Math.floor(Math.random() * diceType) + 1;
    }

    reply = String(totalSum);

    message.reply(reply);
  }
});

client.login(process.env.TOKEN);
