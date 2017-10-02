const commonPaths = require('../../common-paths/common-paths')
const errorHandler = require('../errorHandler/errorhandler')

exports.getJSON = function(req, res) {

  res.sendFile(`${commonPaths.themesPath}/${req.params.themeId}.json`, (err) => {
    if (err) res.sendFile(`${commonPaths.themesPath}/${errorHandler(err).fallBackFile}`)
  })
}