//npx nodemon index.js

//modulo nativo de node
const fs = require("node:fs");
//modulo de ruta nativo de node
const path = require("node:path");
//requerimos biblioteca, es una clase
const { Client, Collection, Intents } = require("discord.js");
//requiero token discord
const { token } = require("./service/config");

//al ser un biblioteca, debemos instanciarla y guardar el objeto que genra cuando instanciamos clases, este objeto va a ser el bot, el cual va a mandar o recibir mensajes
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
//se utiliza para unir una serie de segmentos de ruta utilizando el delimitador específico de la plataforma para formar una ruta única.
const commandsPath = path.join(__dirname, "commands");

//se utiliza para leer sincrónicamente el contenido de un directorio determinado
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

//escuchamos evento de conexión
client.on("ready", () => {
  console.log(`Bot is ready as: ${client.user.tag}!`);
});

//escuchamos el mensaje y respondemos en base a ello
client.on("interactionCreate", async (interaction) => {
   
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

// coneccion al bot, por medio del tokken
client.login(token);

