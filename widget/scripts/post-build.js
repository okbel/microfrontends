const fs = require('fs');
const { files } = require('../build/asset-manifest.json');

(function () {
  // Parse and shape asset manifest
  const desideredVercelConfig = {
    rewrites: Object.entries(files).map(([key, value]) => ({
      "source": key,
      "destination": value
    }))
  }

  // Generates the rewrites needed to route the assets
  // Caution: This overrides any vercel.json created. 
  fs.writeFile('vercel.json', JSON.stringify(desideredVercelConfig, null, 2), (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log('vercel.json done succesfully.');
  })
})();