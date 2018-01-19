let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let morgan = require('morgan')
const PORT = process.env.PORT || 3000

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

let routes = require('./routes')
app.use('/movies' ,routes)

app.use((err, req, res, next) => {
  let status = err.status
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({message: 'NOT FOUND!'})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
