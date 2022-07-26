const { SlashCommandBuilder } = require('@discordjs/builders');
const chisteDb = require("../db/Chistes")
const gifDb = require("../db/Gif")

module.exports = chistes= {
	data: new SlashCommandBuilder()
		.setName('chiste')
		.setDescription('contame un chiste'),
	async execute(interaction) {
        
       
        function chisteAleatorio(){
            return chisteDb[Math.floor(Math.random()*chisteDb.length)]
        }
        function gifRandom(){
            return gifDb[Math.floor(Math.random()*gifDb.length)]
        }

		await interaction.reply(chisteAleatorio());
        await interaction.followUp(`${gifRandom()}`)
	},
};

 

 