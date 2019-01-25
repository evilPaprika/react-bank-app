const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    inn: Number,
    bik: Number,
    account_number: String,
    product_name: String,
    nds: Number,
    amount_of_money: Number,
    trusted: Boolean
});

module.exports = mongoose.model("OnlineBankPayment", paymentSchema);
