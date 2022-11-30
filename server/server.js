const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
var cors = require('cors')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const url = 'mongodb+srv://userdb:9DwLCcgLaR5oAosK@users.ile35kw.mongodb.net/?retryWrites=true&w=majority';



const app = express();

mongoose.connect(url,{ useNewUrlParser: true });

const con = mongoose.connection;


con.on('open',() => {
   console.log("Connected..");

});


app.use(bodyParser.json());
app.use(cors());
app.use('/user',userRoutes);


app.use(notFound);
app.use(errorHandler)




app.listen(9002,console.log('Server started on PORT 9002'));  