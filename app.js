got = require('got');

if (typeof process.env.URL === "undefined" || process.env.URL === null) {
  console.log('quit');
}

(async () => {
  try {
    const response = await got(process.env.URL);
    console.log(response.body);
  } catch (error) {
    console.log(error.response.body);
  }
})();
