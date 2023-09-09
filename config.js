require("dotenv");
const fs = require("fs");
if (fs.existsSync(".env")) {
  require("dotenv").config({ path: ".env" });
} else {
  require("dotenv");
}

let sudo = process.env.SUDO;
if (!sudo) sudo = "94715264791,94742443114";
global.sudo = sudo.split(",");
global.VERSION = "V1 BETA TEST";
global.LANGUAGE = process.env.LANGUAGE || "SI";
global.WORK_TYPE = process.env.WORK_TYPE || "public";
global.ShowInfo = process.env.ShowInfo;
global.upVersion = process.env.upVersion;
global.Showlogger = process.env.Showlogger;
global.REDIS_URL = process.env.REDIS_URL;
global.VERBOSE = process.env.VERBOSE || "0";
global.BOT_MODE = process.env.BOT_MODE || "default";
global.MAINTAINANCE_MODE = process.env.MAINTAINANCE_MODE;
global.HUGGING_FACE_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;
global.PORT = process.env.PORT || Math.floor(Math.random() * 65535) + 10;
global.pgdb = process.env.pgdb;
global.prefix = process.env.prefix || ".";
global.sessionName = process.env.sessionName;
global.timezone = process.env.timezone;
global.upbranch = process.env.upbranch;
global.nameApi = {
  nrtm: "https://nurutomo.herokuapp.com",
  dzx: "https://api.dhamzxploit.my.id",
  xteam: "https://api.xteam.xyz",
  zahir: "https://zahirr-web.herokuapp.com",
  zeks: "https://api.zeks.xyz",
  pencarikode: "https://pencarikode.xyz",
  LeysCoder: "https://leyscoders-api.herokuapp.com",
};
global.keyApi = {
  "api.xteam.xyz": "d90a9e986e18778b",
  "zahirr-web.herokuapp.com": "zahirgans",
  "api.zeks.xyz": "apivinz",
  "pencarikode.xyz": "pais",
  "leyscoders-api.herokuapp.com": "dappakntlll",
};
global.packname = "ǫᴜᴇᴇɴ-ɴɪᴄᴋʏ";
global.author = "ᴅᴜᴍɪᴅᴜ";
global.name = "ǫᴜᴇᴇɴ-ɴɪᴄᴋʏ ᴍᴅ-ᴠᴇʀꜱɪᴏɴ";

global.apiGet = (name, path = "/", query = {}, queryname) =>
  (name in global.nameApi ? global.nameApi[name] : name) +
  path +
  (query || queryname
    ? "?" +
      new URLSearchParams(
        Object.entries({
          ...query,
          ...(queryname
            ? {
                [queryname]:
                  global.keyApi[
                    name in global.nameApi ? global.nameApi[name] : name
                  ],
              }
            : {}),
        }),
      )
    : "");
