module.exports = (err) => {
  switch(err.status) {
    case 404:
        return { Error: err.Error, fallBackFile: 'errorTheme.html' }
        break
    case 500:
        return { Error: err.Error, fallBackFile: '' }
        break
    default:
        return { Error: err.Error, fallBackFile: '' }
  }
}