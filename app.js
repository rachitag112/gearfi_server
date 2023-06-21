const express = require('express')
const bodyParser = require('body-parser')
const assetsRouter = require('./src/assetsRoutes')
const db = require('./src/db')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', assetsRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
