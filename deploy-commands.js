//módulo de fx para acceder e interactuar con el sistema de archivos.
const fs = require('node:fs');
//modulo para trabajar rutas de archivos y sus directorios
const path = require('node:path');

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./service/config');

const commands = []
//
const commandsPath = path.join(__dirname, 'commands');
//en este caso es Async porque lo queremos leer sincronicamente
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);