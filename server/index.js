const app = require('./app')

const port = process.env.API_PORT || 3001

app.listen(port, function() {
  console.log(`api running on port ${port}`) // eslint-disable-line
})
