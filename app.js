const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const subjectRoutes = require('./api/v1/routes/subjects');
const lessonRoutes = require('./api/v1/routes/lessons');
const categoryRoutes = require('./api/v1/routes/categories');
const userRoutes = require('./api/v1/routes/user');

mongoose.connect('mongodb+srv://node-tutoring:' + process.env.MONGO_ATLAS_PW + '@node-rest-tutoring-aabco.mongodb.net/test?retryWrites=true&w=majority', {
   //useMongoClient: true,
   useUnifiedTopology: true,
   useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Cotrol-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//    );
//    if (req.method === 'OPTIONS') {
//       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//       return res.status(200).json({});
//    }
// });

//ROUTES WHICH SHOULD HANDLE REQUESTS
app.use('/subjects', subjectRoutes);
app.use('/categories', categoryRoutes);
app.use('/lessons', lessonRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
   const error = new Error('Not Found');
   error.status = 404;
   next(error);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
      error: {
         message: error.message
      }
   });
});


module.exports = app;