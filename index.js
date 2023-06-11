require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const { twitterClient } = require("./twitterClient.js")
const generate = require("./utils/utils.js")

const CronJob = require("cron").CronJob;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const tweet = async () => {
    try {
      await twitterClient.v2.tweet("Heh guys name: " + generate.generateRandomLetter());
    } catch (e) {
      console.log(e)
    }
  }
  
  const cronTweet = new CronJob("0 */5 * * *", async () => {
    tweet();
  });
  
  // 30 * * * * *
  cronTweet.start();


