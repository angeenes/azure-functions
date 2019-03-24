const axios = require("axios");

module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  if (req.query.id || (req.body && req.body.id)) {
    axios
      .get(
        "https://www.acadomia.fr/webservices/?type=liste_agences&agence_id=" +
          (req.query.id || req.body.id)
      )
      .then(response => {
        //   console.log(response.data.url);
        //   console.log(response.data.explanation);
        context.res = {
          // status: 200, /* Defaults to 200 */
          body: response
        };
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    context.res = {
      status: 400,
      body: "Please pass a id on the query string or in the request body"
    };
  }
};
