const dotenv = require("dotenv");

dotenv.config();
const requiredEnvs = ["TOKEN", "GUILD_ID", "CLIENT_ID"]

requiredEnvs.forEach((env) => {
    if (!process.env[env]) throw new Error(`Missing env variable ${env}`);
  });

module.exports ={
    token: process.env.TOKEN,
    guildId: process.env.GUILD_ID,
    clientId: process.env.CLIENT_ID,
}
