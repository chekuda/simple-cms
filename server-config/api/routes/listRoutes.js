const listController = require('../controllers/listControllers')

module.exports = function(app) {

  //Get the theme
  app.route('/api/getJSON/themes/:themeId')
      .get(listController.getJSON)

  //Get if user exist
  //
  //Post new user
  //
  //Delete user
  //
  //Get config file
  //
  //Post Config file
  //
  //Update Config file on save
}