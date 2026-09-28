const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {
    await interaction.update({
        embeds: [new EmbedBuilder().setTitle("👋 Welcome & Goodbye").setDescription("Welcome settings will be built here.").setColor("Green")],
        components: []
    });
};
