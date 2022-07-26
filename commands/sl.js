const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = saludo= {
	data: new SlashCommandBuilder()
		.setName('saludo')
		.setDescription('saludar'),
	async execute(interaction) {
       
		await interaction.reply(`Hola  ${interaction.user.username}`);
        
	},
};