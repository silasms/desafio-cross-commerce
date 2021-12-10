const axios = require("axios")
const promiseAll = require("../../modules/promise-all/index.js");

const multiplyPersistRequest = async (links) => {
    try{
        const responses = await promiseAll(
            links.map((value) => {
              return axios.get(value);
            })
          );
        if (responses.length < links.length) {
            for (const element of responses) {
                links.splice(links.indexOf(element.config.url), 1);
            }
            const responsesAgain = await multiplyPersistRequest(links)
            responses.push(...responsesAgain);
          }
        return responses
    } catch(er) {

    }
}
module.exports = {multiplyPersistRequest}