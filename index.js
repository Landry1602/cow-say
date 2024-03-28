const userInfo = require('./information')
const cowsay = require('cowsay')

console.log(cowsay.say({
    text: `Hello, I'm ${userInfo.name}, and I'm from ${userInfo.campus}`,
}))