const axios = require('axios');

module.exports = class Cat {
  static async fetchRandomCat() {
    try {
      const response = await axios.get('/v1/images/search', {
        baseURL: 'https://api.thecatapi.com',
        // headers: { 'x\-api\-key': process.env.CAT_API_KEY }
      })
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async fetchCatBreeds() {
    try {
      const response = await axios({
        url: '/v1/breeds',
        method: 'get', // default
        baseURL: 'https://api.thecatapi.com',
        // headers: { "x-api-key": process.env.CAT_API_KEY }
      })
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async fetchCatBreed() {
    try {
      const response = await axios({
        url: `v1/breeds/search?q=beng`,
        method: 'get', // default
        baseURL: 'https://api.thecatapi.com',
        // headers: { "x-api-key": process.env.CAT_API_KEY }
      })
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
