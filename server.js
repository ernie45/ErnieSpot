/** Declare dependencies */
var express = require("express");
var hanb = require("express-handlebars");
var bodyParser = require("body-parser");

/** Declare the express application */
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.engine("handlebars", hanb({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// require("./routes/router.js")(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});

