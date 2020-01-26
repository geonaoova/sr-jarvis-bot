const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class LocationController extends TelegramBaseController {

    sendLocation(scope) {
        console.log(scope);
        scope.sendLocation(-26.880467, -49.085920);
    }

    get routes() {
        return {
            'location': 'sendLocation'
        }
    }

}
module.exports = LocationController;