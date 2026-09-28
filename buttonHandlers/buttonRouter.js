const handlers = {
    welcome: require("./welcomeButtons"),
    tickets: require("./ticketButtons"),
    creator: require("./creatorButtons"),
    logging: require("./loggingButtons"),
    security: require("./securityButtons"),
    general: require("./generalButtons")
};

module.exports = async (interaction) => {
    const id = interaction.customId;
    for (const [prefix, handler] of Object.entries(handlers)) {
        if (id.startsWith(`setup_${prefix}`)) return handler(interaction);
    }
};
