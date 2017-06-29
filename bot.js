const apiKeys = require("./.env").apiKeys;
const Twit = require('twit');
const flavorText = require("./monster-text.json");
const tweetRate = 70*1000;


class Bot {
  constructor() {
    this.api = new Twit(apiKeys);
  }

  postTweet() {
    const flav = this.getRandomFlavorText(flavorText);
    this.api.post('statuses/update', {status: flav})
      .then(console.log(`Successful tweet:  ""${flav}""`))
      .catch(errer => console.log(`An error occurred:  error.stack`));
  }

  getRandomFlavorText(collection) {
    return collection[Math.floor(Math.random()*((collection.length-1)-0+1)+0)];
  }
}


/*
  Node execution area
*/
const bot = new Bot();

setInterval(() => bot.postTweet(), tweetRate);
