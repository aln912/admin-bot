const fs = require("fs");
const BotClient = require("./structures/Client");
const yaml = require("yaml");

const configs = yaml.parse(fs.readFileSync('./configs/config.yml', 'utf8'));

const client = new BotClient(configs.general.token);
client.login(configs.general.token);

["commands", "events", "addons"].forEach(handler => {
  require(`./handlers/${handler}`).init(client);
});
