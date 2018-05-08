const request = require("request");

var getWeather = (lat , lng , callback) => {

request(
  {
    url: `https://api.darksky.net/forecast/fe9ecfbc92f5c7cb9135344f654b2223/${lat},${lng}`,
    json: true
  },
  (error, response, body) => {
    if (!error && response.statusCode == 200) {
      callback(undefined , {
        temperature: body.currently.temperature,
        actualTemp: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather')
    }
  }
);
};
module.exports.getWeather = getWeather;
