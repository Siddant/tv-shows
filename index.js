require('dotenv').config()

const express = require('express')
const app = express()

app.listen(process.env.PORT, () => console.log('Express is listening on port 4000'))
