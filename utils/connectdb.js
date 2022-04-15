//Thank you codingleft.com for presenting a very useful template that I was able to leverage for this!
//https://www.codingdeft.com/posts/react-authentication-mern-node-passport-express-mongo/

const mongoose = require("mongoose");
const url = process.env.MONGO_DB_CONNECTION_STRING;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
connect
  .then((db) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
