const requestPromise = require( 'request-promise' );

module.exports = async function ( city = '' ) {
  if ( !city ) {
    throw new Error( `Named City doesn't Empty.` )
  }

  const options = {
    uri: `http://api.openweathermap.org/data/2.5/weather`,
    qs: {
      appid: '57b2d1529b2824faf150da508001e3e8',
      q: city
    },
    json: true,
  };

  try {
    const data = await requestPromise( options );

    return {
      weather: `${data.name}: ${(data.main.temp - 273.15).toFixed(1) }`,
      error: null,
    }
  } catch ( error ) {
    return {
      weather: null,
      error: error.error.message,
    }
  }
}
