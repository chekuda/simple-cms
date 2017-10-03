const commonPaths = require('../../common-paths/common-paths')

exports.getJSON = function(req, res) {

  res.sendFile(`${commonPaths.themesPath}/${req.params.themeId}.json`)
}