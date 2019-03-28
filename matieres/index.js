var request = require("request");

module.exports = function(context) {
  request("https://www.acadomia.fr/webservices/?type=liste_matieres", function(
    error,
    response,
    body
  ) {
    if (error) {
      context.log(error);
    }
    if (!error && response.statusCode == 200) {
      context.res = {
        body: JSON.parse(body)
      };
    }
    context.done();
  });
};
