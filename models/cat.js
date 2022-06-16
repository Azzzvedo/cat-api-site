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


}

const otpions = {
  url: '/search',
  // `method` is the request method to be used when making the request
  method: 'get', // default
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://api.thecatapi.com/images',
  headers: { xApiKey: "ABC123" }

}
