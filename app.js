const path = require('path');

const express = require('express')

const app = express()

const catsRoutes = require("./routes/cats")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(catsRoutes)

app.listen(port)
