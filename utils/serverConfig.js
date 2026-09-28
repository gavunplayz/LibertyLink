const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "..", "data");
if (!fs.existsSync(dataFolder)) fs.mkdirSync(dataFolder);

function getConfig(guildId) {
    const file = path.join(dataFolder, `${guildId}.json`);

    if (!fs.existsSync(file)) {
        const defaultConfig = {
            welcome: {
                enabled: false,
                channel: null,
                message: "Welcome {user}!",
                showMemberCount: true
            },
            goodbye: {
                enabled: false,
                channel: null,
                message: "Goodbye {user}!"
            },
            creatorChannels: [],
            tickets: {
                generalCategory: null,
                collabCategory: null,
                supportRole: null
            },
            logging: {},
            economy: {
                enabled: true
            },
            security: {}
        };

        fs.writeFileSync(file, JSON.stringify(defaultConfig, null, 4));
    }

    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function saveConfig(guildId, config) {
    const file = path.join(dataFolder, `${guildId}.json`);
    fs.writeFileSync(file, JSON.stringify(config, null, 4));
}

module.exports = {
    getConfig,
    saveConfig
};
