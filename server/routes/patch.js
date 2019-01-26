var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const CardPayment = require("../models/CardPayment");
const OnlineBankPayment = require("../models/OnlineBankPayment");
const RequestPayment = require("../models/RequestPayment");

function markUntrusted(model) {
    return (req, res) => {
        console.log(req.body);
        model
            .findOneAndUpdate({ _id: req.body.id }, { trusted: false })
            .exec()
            .then(docs => {
                res.status(200).json(docs);
            })
            .catch(err => {
                res.status(400).json({
                    error: err
                });
            });
    };
}

router.patch("/api/card-payment", markUntrusted(CardPayment));
router.patch("/api/online-bank-payment", markUntrusted(OnlineBankPayment));
router.patch("/api/request-payment", markUntrusted(RequestPayment));

module.exports = router;
