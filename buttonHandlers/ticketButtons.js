const { EmbedBuilder } = require("discord.js");
module.exports = async (interaction) => interaction.update({ embeds: [new EmbedBuilder().setTitle("🎫 Tickets").setDescription("Ticket settings will be built here.").setColor("Blue")], components: [] });
