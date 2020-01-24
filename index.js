'use strict'

const Telegram = require('telegram-node-bot');
require('dotenv').config();

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const TelegramBaseController = Telegram.TelegramBaseController;
const TextComand = Telegram.TextCommand;
const chatBot = new Telegram.Telegram(TOKEN);

class EventsController extends TelegramBaseController {

    helloAction(scope) {
        const greetings = `Hello my great friend`;
        scope.sendMessage(greetings);
    }

    get routes() {
        return {
            'hello': 'helloAction'
        }
    }

}

chatBot.router.when(new TextComand('/hello', 'hello'), new EventsController());
