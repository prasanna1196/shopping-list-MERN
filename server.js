const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');


const app = express();

app.use(express.json());

// DB connection
const db = "mongodb://localhost:27017/shop";
mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

// Routes
app.use('/api/items', items);


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));




















