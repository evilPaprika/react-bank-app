const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    inn: Number,
    bik: Number,
    account_number: Number,
    product_name: String,
    nds: String,
    amount_of_money: Number
});

module.exports = mongoose.model("OnlineBankPayment", paymentSchema);
