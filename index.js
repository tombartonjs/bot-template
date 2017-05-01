const builder = require('botbuilder')

let connector = new builder.ConsoleConnector().listen()
let bot = new builder.UniversalBot(connector)

bot.dialog('/', function (session) {
  session.send('Hello world')
})
