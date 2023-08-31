const mongoose = require('mongoose');
// const mongoURI = 'mongodb://localhost:4000/sampritkanungo43';
mongoURI='mongodb+srv://sampritkanungo43:Samprit@1234@cluster0.rwpqusn.mongodb.net/?retryWrites=true&w=majority'

const connectDB = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
}

mongoose.connect(mongoURI,connectDB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });




module.exports = connectDB