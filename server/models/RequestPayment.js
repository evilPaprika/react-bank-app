const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    recievers_inn: Number,
    bik: Number,
    account_number: String,
    product_name: String,
    nds: Number,
    amount_of_money: Number,
    phone: String,
    email: String,
    trusted: Boolean
});

module.exports = mongoose.model("RequestPayment", paymentSchema);
