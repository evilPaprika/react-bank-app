var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const CardPayment = require("../models/CardPayment");
const OnlineBankPayment = require("../models/OnlineBankPayment");
const RequestPayment = require("../models/RequestPayment");

router.get("/api/card-payment", (req, res) => {
    res.send("hui");
});

module.exports = router;
