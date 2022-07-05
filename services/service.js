const axios = require('axios');
require('dotenv').config();

const getCryptoPrices = async () => {
  console.log("Fetching REAL crypto");
  return await axios.get(`${process.env.url}`);
};

module.exports = getCryptoPrices;
