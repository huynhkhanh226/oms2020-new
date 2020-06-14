exports.devServer = ({ host, port, browser } = {}) => ({
  devServer: {
    stats: "errors-only",
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: browser,//false
    overlay: true,
    historyApiFallback: true,
    //contentBase: './',
    //hot: true
    //headers: { 'Access-Control-Allow-Origin': '*' },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },

  }
});

exports.getEnv = mode => {
  var path = require("path"); // to get the current path
  const fs = require("fs"); // to check if the file exists
  const dotenv = require("dotenv"); // like dotenv-webpack
  //Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  // Create the fallback path (the production .env)
  const basePath = currentPath + "/.env";
  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + "." + mode;
  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
 
  return fileEnv;
};


exports.getEnvKeys = mode => {
  var path = require("path"); // to get the current path
  const fs = require("fs"); // to check if the file exists
  const dotenv = require("dotenv"); // like dotenv-webpack
  //Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  // Create the fallback path (the production .env)
  const basePath = currentPath + "/.env";
  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + "." + mode;
  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    //console.log(prev);
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  return envKeys;
};
