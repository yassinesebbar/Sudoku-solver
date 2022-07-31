"use strict";
exports.__esModule = true;
var application_1 = require("./modules/application");
var app = new application_1["default"]();
if (typeof document !== "undefined") {
    app.run();
}
else {
    alert("document does not exist");
}
