const express = require("express")
const bodyParser = require("body-parser")
var cors = require('cors')
const app = express()
app.use(cors())

const todoRouter = require("./Routes/todo")

app.use(bodyParser.json())
app.use('/todo', todoRouter)

app.listen(3000, () => console.log("listening to port 3000"))
