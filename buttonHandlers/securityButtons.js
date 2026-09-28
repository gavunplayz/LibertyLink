const { EmbedBuilder } = require("discord.js");
module.exports = async (interaction) => interaction.update({ embeds: [new EmbedBuilder().setTitle("🛡️ Security").setDescription("Security settings will be built here.").setColor("Red")], components: [] });
