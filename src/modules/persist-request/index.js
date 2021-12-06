const axios = require("axios");

const persistRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch {
    await persistRequest(url);
  }
};

module.exports = persistRequest;
