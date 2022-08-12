const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/ShoppingList", { useNewUrlParser: true }).then(() => {
    console.log("Connected to Mongo :)")
}).catch((e) => {
    console.log("Error connecting to Mongo :(");
    console.log(e)
});

//Depravation Warning prevention
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);

module.exports = { mongoose }