const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://stud:d8DKoSD1C0pXCpfI@cluster0.f4gfe.mongodb.net/crud?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(5000))
    .catch(err => console.log(err)
    );

// ALL ROUTES ARE BEING IMPORTED FROM POST ROUTES!!

app.use('/', require('./routes/postRoutes'));

//db passkey: d8DKoSD1C0pXCpfI