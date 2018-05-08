const request = require("request");
var your_api = "put_in_your_api_key"; //Change this with your api at https://darksky.net/dev

var getWeather = (lat , lng , callback) => {

request(
  {
    url: `https://api.darksky.net/forecast/${your_api}/${lat},${lng}`,
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
