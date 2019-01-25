var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator/check");

const CardPayment = require("../models/CardPayment");
const OnlineBankPayment = require("../models/OnlineBankPayment");
const RequestPayment = require("../models/RequestPayment");

router.use(bodyParser.urlencoded({ extended: true }));

const validationsCardPayment = [
    check("card_number").matches(/\d{4} \d{4} \d{4} \d{4}$/),
    check("expiration_date").matches(/^(0[1-9]|10|11|12)\/[0-9]{2}$/),
    check("cvc").matches(/^\d{3}$/),
    check("amount_of_money").matches(
        /^([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-6][0-9]{4}|7[0-4][0-9]{3}|75000)$/
    ),
    check("comment")
        .optional({ checkFalsy: true })
        .isLength({ max: 150 }),
    check("email")
        .optional({ checkFalsy: true })
        .isEmail()
];

const validationsOnlineBankPayment = [
    check("inn").matches(/^\d{12}$/),
    check("bik").matches(/^\d{9}$/),
    check("account_number").matches(/^\d{20}$/),
    check("amount_of_money").matches(
        /^([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-6][0-9]{4}|7[0-4][0-9]{3}|75000)$/
    ),
    check("nds").matches(/^(0)|(10)|(18)$/),
    check("product_name").isLength({ max: 150 })
];

const validationsRequestPayment = [
    check("recievers_inn").matches(/^\d{12}$/),
    check("bik").matches(/^\d{9}$/),
    check("phone")
        .optional({ checkFalsy: true })
        .matches(/^\+7 \d{3} \d{3} \d{2} \d{2}$/),
    check("account_number").matches(/^\d{20}$/),
    check("amount_of_money").matches(
        /^([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-6][0-9]{4}|7[0-4][0-9]{3}|75000)$/
    ),
    check("nds").matches(/^(0)|(10)|(18)$/),

    check("email")
        .optional({ checkFalsy: true })
        .isEmail(),
    check("product_name").isLength({ max: 150 })
];

function postHandlerTemplate(model) {
    return (req, res) => {
        console.log(req.body);
        const payment = new model(
            Object.assign(req.body, { _id: new mongoose.Types.ObjectId() })
        );
        console.log(validationResult(req).array());
        new Promise((resolve, reject) => {
            validationResult(req).isEmpty()
                ? resolve(payment.save())
                : reject(new Error("Неверный формат данных"));
            console.log(validationResult(req).isEmpty());
        })
            .then(result => {
                res.status(201).json({
                    message: "Запрос был сохранен, и принят в обработку",
                    createdPayment: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                });
            });
    };
}

router.post(
    "/api/card-payment",
    validationsCardPayment,
    postHandlerTemplate(CardPayment)
);
router.post(
    "/api/online-bank-payment",
    validationsOnlineBankPayment,
    postHandlerTemplate(OnlineBankPayment)
);
router.post(
    "/api/request-payment",
    validationsRequestPayment,
    postHandlerTemplate(RequestPayment)
);

module.exports = router;
