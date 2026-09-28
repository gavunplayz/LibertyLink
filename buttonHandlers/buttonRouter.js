const handlers = {
    welcome: require("./welcomeButtons"),
    tickets: require("./ticketButtons"),
    creator: require("./creatorButtons"),
    giveaways: require("./giveawayButtons"),
    economy: require("./economyButtons"),
    security: require("./securityButtons"),
    logging: require("./loggingButtons"),
    general: require("./generalButtons")
};

module.exports = async (interaction) => {
    const id = interaction.customId;

    if (interaction.isStringSelectMenu() && id === "setup_menu") {
        const value = interaction.values[0];
        const handler = handlers[value];

        if (!handler) {
            return interaction.reply({
                content: "That setup category is not available yet.",
                ephemeral: true
            });
        }

        return handler(interaction);
    }

    if (interaction.isButton()) {
        for (const [prefix, handler] of Object.entries(handlers)) {
            if (id.startsWith(`setup_${prefix}`)) {
                return handler(interaction);
            }
        }
    }
};
