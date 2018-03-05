const path = require("path");

module.exports = function(app){
    
    app.get("/contact", function(req, res){
        res.render("contact");
    });
    app.get("/portfolio", function(req, res){
        res.render("portfolio");
    });
};