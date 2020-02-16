const mongoose = require("mongoose")
require("dotenv").config()

const mongodb = process.env.MONGO_URI

mongoose
  .connect(mongodb)
  .then(() => console.log('Mongo Connected...'))
  .catch(err => console.log(err))