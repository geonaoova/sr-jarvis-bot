const Telegram = require('telegram-node-bot');
const request = require('request');
const InputFile = Telegram.InputFile;
const TelegramBaseController = Telegram.TelegramBaseController;

class PhotoController extends TelegramBaseController {

    async sendPhoto(scope) {
        request.get('https://picsum.photos/720/1280', function (err, res, body) {
            const photoId = res.request.path.replace('/','');
            if (err) {
                scope.sendMessage('Fo mal, não consegui buscar uma imagem :(');
            } else {
                scope.sendPhoto(InputFile.byUrl(res.request.uri.href, photoId));
            }
        }).on('error', function(err) {
            console.log(err);
        });
    }

    get routes() {
        return {
            'photo': 'sendPhoto'
        }
    }

}
module.exports = PhotoController;