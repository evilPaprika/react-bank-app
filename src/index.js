import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let userInfo = { name: "" };

fetch("/api/user_info")
    .then(res => res.json())
    .then(res => Object.assign(userInfo, res))
    .catch(err => console.log(err))
    .then(() => ReactDOM.render(<App />, document.getElementById("root")));

export default userInfo;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
