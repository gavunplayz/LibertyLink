const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Configure the Content Creator Bot.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("⚙️ Content Creator Bot Setup")
            .setDescription("Welcome to the setup panel!\n\nSelect a category from the dropdown menu below to configure your server.")
            .setColor("Blurple");

        const menu = new StringSelectMenuBuilder()
            .setCustomId("setup_menu")
            .setPlaceholder("Select a setup category...")
            .addOptions(
                new StringSelectMenuOptionBuilder().setLabel("General").setDescription("General bot settings").setValue("general").setEmoji("⚙️"),
                new StringSelectMenuOptionBuilder().setLabel("Welcome & Goodbye").setDescription("Configure welcome and goodbye messages").setValue("welcome").setEmoji("👋"),
                new StringSelectMenuOptionBuilder().setLabel("Tickets").setDescription("Configure the ticket system").setValue("tickets").setEmoji("🎫"),
                new StringSelectMenuOptionBuilder().setLabel("Creator Tools").setDescription("Configure content creator features").setValue("creator").setEmoji("🎥"),
                new StringSelectMenuOptionBuilder().setLabel("Giveaways").setDescription("Configure giveaways").setValue("giveaways").setEmoji("🎉"),
                new StringSelectMenuOptionBuilder().setLabel("Economy").setDescription("Configure the economy system").setValue("economy").setEmoji("💰"),
                new StringSelectMenuOptionBuilder().setLabel("Security").setDescription("Configure anti-spam and anti-raid").setValue("security").setEmoji("🛡️"),
                new StringSelectMenuOptionBuilder().setLabel("Logging").setDescription("Configure server logs").setValue("logging").setEmoji("📝")
            );

        await interaction.reply({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(menu)],
            ephemeral: true
        });
    }
};
