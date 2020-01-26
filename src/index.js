'use strict'
const Telegram = require('telegram-node-bot');
require('dotenv').config();
const HelloController = require('./app/controllers/hello-controller');
const LocationController = require('./app/controllers/location-controller');
const PhotoController = require('./app/controllers/photo-controller');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const TextComand = Telegram.TextCommand;
const chatBot = new Telegram.Telegram(TOKEN);

chatBot.router
    .when(new TextComand('/hello', 'hello'), new HelloController())
    .when(new TextComand('/photo', 'photo'), new PhotoController())
    .when(new TextComand('/location', 'location'), new LocationController());
