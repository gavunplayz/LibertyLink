const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {
    await interaction.update({
        embeds: [
            new EmbedBuilder()
                .setTitle("💰 Economy")
                .setDescription("Economy settings will be built here.")
                .setColor("Green")
        ],
        components: []
    });
};
