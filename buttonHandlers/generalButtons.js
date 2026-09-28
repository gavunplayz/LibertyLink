const { EmbedBuilder } = require("discord.js");
module.exports = async (interaction) => interaction.update({ embeds: [new EmbedBuilder().setTitle("⚙️ General Settings").setDescription("General settings will be built here.").setColor("Blurple")], components: [] });
