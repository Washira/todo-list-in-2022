const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dbConfig = require('./db')
const routes = require('./todoList.route')
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(
  () => {
    console.log("Database successfully connected");
  },
  (error) => {
    console.log("Could not connect to database:" + error);
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/todo', routes)

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

app.use((req, res, next) => {
  next(createError(404));
});
  
//Error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});