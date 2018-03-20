const path = require("path");
const config = require("../public/config");

module.exports = function(app){
    // app.post("/send.php", function(req, res){
    //     res.sendFile(path.join(__dirname, "/public/send.php"));
    // });
    app.get("/", function(req, res){
      res.sendFile(path.join(__dirname, "../public/other.html"));
    });
    app.post("/sendEmail", function(req, res){
      console.log(req.body);
      var message = req.body.message;
      var sender = req.body.sender;
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(config.apiKey);
      const msg = {
        to: config.toEmail,
        from: config.fromEmail,
        subject: "About Ernie's Spot",
        text: message,
        html: "Sender: " + sender + "\nmessage: " + message,
      };
      sgMail.send(msg);
      res.sendFile(path.join(__dirname, "../public/other.html"));
    });
};