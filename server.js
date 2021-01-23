const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })
 
mongoose.connect('mongodb://localhost/tracker', {useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> console.log(`connected to mongodb...}`))
    .catch((err) => console.error('could not connect to mongodb '));


const currencyRouter = require('./routes/currency');


app.use('/api/rates', currencyRouter);

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = server;