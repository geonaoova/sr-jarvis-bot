const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class HelloController extends TelegramBaseController {

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
module.exports = HelloController;