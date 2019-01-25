const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const CardPayment = require("./models/CardPayment");
const OnlineBankPayment = require("./models/OnlineBankPayment");
const RequestPayment = require("./models/RequestPayment");

mongoose.connect(
    "mongodb+srv://bobross:bobross@bank-app-cgofe.mongodb.net/payments-test?retryWrites=true"
);

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

app.post("/card-payment", (req, res) => {
    console.log(req.body);
    const payment = new CardPayment(
        Object.assign(req.body, { _id: new mongoose.Types.ObjectId() })
    );
    console.log(payment);
    payment
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Запрос был сохранен, и принят в обработку",
                createdPayment: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

app.post("/online-bank-payment", (req, res) => {
    // console.log(req.body);
    const payment = new CardPayment(
        Object.assign(req.body, { _id: new mongoose.Types.ObjectId() })
    );
    // console.log(payment);
    payment
        .save()
        .then(result => {
            // console.log(result);
            res.status(201).json({
                message: "Запрос был сохранен, и принят в обработку",
                createdPayment: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

app.post("/request-payment", (req, res) => {
    // console.log(req.body);
    const payment = new CardPayment(
        Object.assign(req.body, { _id: new mongoose.Types.ObjectId() })
    );
    // console.log(payment);
    payment
        .save()
        .then(result => {
            // console.log(result);
            res.status(201).json({
                message: "Запрос был сохранен, и принят в обработку",
                createdPayment: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
