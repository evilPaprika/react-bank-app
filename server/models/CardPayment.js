const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    card_number: String,
    expiration_date: String,
    cvc: Number,
    amount_of_money: Number,
    comment: String,
    email: String
});

module.exports = mongoose.model("CardPayment", paymentSchema);
