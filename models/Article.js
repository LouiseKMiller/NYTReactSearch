// require mongoose
var mongoose = require('mongoose');

// mongoose allows for schemas in MongoDB
// descries data construct of a 'document'
// create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is required
  title: {
    type:String,
    required:true
  },
  date: {
    type:Date
  },
  // link is required
  url: {
    type:String,
    required:true
  }

});

// a 'model' is a complied version of the schema
// one instance of the model will map to one 'document' in the database
// it is the model that handles the CRUD of documents
// Create the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

// export the model
module.exports = Article;

