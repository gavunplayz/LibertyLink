const { EmbedBuilder } = require("discord.js");
module.exports = async (interaction) => interaction.update({ embeds: [new EmbedBuilder().setTitle("📝 Logging").setDescription("Logging settings will be built here.").setColor("Orange")], components: [] });
