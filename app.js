        //Created by Ahmad Adel
        //www.fb.com/ahmadelgool619

const yargs = require("yargs");
const geocode = require('./geocode/geocodee');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Adress to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
  geocode.geocodeAddress(argv.address , (errorMessage, results)=> {
    if (errorMessage) {
      console.log(errorMessage);
    }else {
      console.log(results.address);
      weather.getWeather(results.latitude,results.longitude , (errorMessage , weatherResults)=> {
        if (errorMessage) {
          console.log(errorMessage);
        }else {
          console.log(`It's currently ${parseInt((weatherResults.temperature - 32) * 5/9)}° celsius degree and ${parseInt(weatherResults.temperature)} fehrenhite. `);
        }

    });
}
});
