const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {
    await interaction.update({
        embeds: [
            new EmbedBuilder()
                .setTitle("🎉 Giveaways")
                .setDescription("Giveaway settings will be built here.")
                .setColor("Gold")
        ],
        components: []
    });
};
