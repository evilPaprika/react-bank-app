const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
mongoose.connect(
    "mongodb+srv://bobross:bobross@bank-app-cgofe.mongodb.net/payments-test?retryWrites=true"
);
app.use(function(req, res, next) {
    console.log((req && req.method) + ":\n" + (req && req.body));
    next();
});
app.use(require("./routes/post"));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/user_info", (req, res) => {
    res.send({
        name: "Роберт Норман Росс",
        phone: "+79193977777",
        site: "www.bobross.com",
        email: "info@bobross.com"
    });
});
