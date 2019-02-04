require('dotenv').config()
//const Tvshows = require('./models/tvshows')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

mongoose.connect('mongodb://localhost/tv-shows-db')

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use('/api',routes)

app.listen(process.env.PORT, () => console.log(`Express is listening on port ${process.env.PORT}`))
