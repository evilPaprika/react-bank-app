const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/user_info", (req, res) => {
    res.send({
        name: "Роберт Норман Росс",
        phone: "+79193977777",
        site: "www.bobross.com",
        email: "info@bobross.com"
    });
});
