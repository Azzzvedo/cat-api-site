const fetch = require("node-fetch")

module.exports = class Cat {
  static async fetchRandomCat() {
    const cat = await fetch('https://api.thecatapi.com/v1/images/search')
    console.log('cat');
  }
}
