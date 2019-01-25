var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const CardPayment = require("../models/CardPayment");
const OnlineBankPayment = require("../models/OnlineBankPayment");
const RequestPayment = require("../models/RequestPayment");

router.use(bodyParser.urlencoded({ extended: true }));

function postHandlerTemplate(model) {
    return (req, res) => {
        console.log(req.body);
        const payment = new model(
            Object.assign(req.body, { _id: new mongoose.Types.ObjectId() })
        );
        payment
            .save()
            .then(result => {
                res.status(201).json({
                    message: "Запрос был сохранен, и принят в обработку",
                    createdPayment: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    };
}

router.post("/api/card-payment", postHandlerTemplate(CardPayment));
router.post("/api/online-bank-payment", postHandlerTemplate(OnlineBankPayment));
router.post("/api/request-payment", postHandlerTemplate(RequestPayment));

module.exports = router;
