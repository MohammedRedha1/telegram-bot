const TelegramBot = require("node-telegram-bot-api");
const token = "hidden";
const bot = new TelegramBot(token, { polling: true });
function createKeyboardMarkup() {
    return {
        keyboard: [[{ text: "Show scripts" }, { text: "Show Executers" }]],
        resize_keyboard: true,
        one_time_keyboard: false,
    };
}

const scriptsInstructions =
    "Available scripts:\n/VectroHub - Get vectro hub script.\n/RedzHub - Get Redz Hub script.\n/AnnyHub - Get Annie Hub script.\n/HohoHub - Get Hohu Hub script.\n/MtrietHub - Get Mtriet Hub script.\n/WazureHub - Get Wazure Hub script.";
const executersInstructions =
    "Avaialble executers:\n/hydrogen\n/Delta\n/PunkTeam";

const availableCommands = {
    VectroHub: `_G.Mode = "Eng" 
        loadstring(game:HttpGet("https://raw.githubusercontent.com/AAwful/VectorHub/main/Loader.lua"))()`,
    RedzHub: `loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BloxFruits/main/redz9999"))()`,
    AnnieHub: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Anniecuti/Free-Scr/main/Annie-Hub.lua"))()`,
    HohoHub: `
        _G.HohoVersion = "v3"
        loadstring(game:HttpGet('https://raw.githubusercontent.com/acsu123/HOHO_H/main/Loading_UI'))()`,
    MtrietHub: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Minhtriettt/Free-Script/main/MTriet-Hub.lua"))()`,
    WazureHub: `
       getgenv().Team = "Pirates"
       getgenv().FixCrash = false -- Turn it On For Hopping Server, Improve Performance But Silent Aim On Mob And Player
       getgenv().FixCrash2 = false -- Turn it On For Hopping Server, Improve Performance But Will Remove Speed Changer
       loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/3b2169cf53bc6104dabe8e19562e5cc2.lua"))()`,
    hydrogen: "https://hydrogenexecutor.com/download/",
    Delta: "https://delta-executor.com/download/",
    PunkTeam: "https://discord.com/invite/silentcaliber",
};

bot.onText(/\/([^ ]+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const command = match[1];

    if (availableCommands.hasOwnProperty(command)) {
        bot.sendMessage(chatId, availableCommands[command]);
    } else if (command !== "start") {
        bot.sendMessage(
            chatId,
            `Unknown command: ${command}. Use /help to see available commands.`
        );
    }
});

// Set up the btns' functionality
bot.onText(/Show scripts/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, scriptsInstructions);
});
bot.onText(/Show Executers/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, executersInstructions);
});

//Set up btns
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
        chatId,
        "Welcome to the Roblox Blox Fruit Exploits bot! Here you can find the latest scripts and executers. Please select an option below.\nThe Bot was made by @Mohammed_TwT",
        {
            reply_markup: createKeyboardMarkup(),
        }
    );
});
