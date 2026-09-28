const { EmbedBuilder } = require("discord.js");
module.exports = async (interaction) => interaction.update({ embeds: [new EmbedBuilder().setTitle("🎥 Creator Tools").setDescription("Creator settings will be built here.").setColor("Purple")], components: [] });
