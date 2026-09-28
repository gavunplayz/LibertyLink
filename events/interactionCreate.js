const buttonRouter = require("../buttonHandlers/buttonRouter");

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;
            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                const message = { content: "There was an error executing this command.", ephemeral: true };
                if (interaction.replied || interaction.deferred) await interaction.followUp(message);
                else await interaction.reply(message);
            }
            return;
        }

        if (interaction.isButton()) {
            await buttonRouter(interaction);
            return;
        }

        if (interaction.isStringSelectMenu()) {
            await buttonRouter(interaction);
        }
    }
};
