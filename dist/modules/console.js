"use strict";
exports.__esModule = true;
var Console = (function () {
    function Console() {
        this.clearButtonEnabled = true;
        this.startButtonEnabled = true;
        this.createDomElements();
    }
    Console.prototype.createDomElements = function () {
        this.startButtonElement = document.createElement('button');
        this.startButtonElement.innerText = "Start";
        this.clearButtonElement = document.createElement('button');
        this.clearButtonElement.innerText = "Clear";
        this.consoleWrapperDivElement = document.createElement("div");
        this.consoleWrapperDivElement.id = "Console";
        this.consoleWrapperDivElement.appendChild(this.startButtonElement);
        this.consoleWrapperDivElement.appendChild(this.clearButtonElement);
    };
    Console.prototype.getConsoleDomElement = function () {
        return this.consoleWrapperDivElement;
    };
    Console.prototype.disableButtons = function () {
        this.startButtonElement.disabled = true;
        this.clearButtonElement.disabled = true;
        this.clearButtonEnabled = this.startButtonEnabled = false;
    };
    Console.prototype.enableButtons = function () {
        this.startButtonElement.disabled = false;
        this.clearButtonElement.disabled = false;
        this.clearButtonEnabled = this.startButtonEnabled = true;
    };
    Console.prototype.enableClearButton = function () {
        this.startButtonElement.disabled = false;
        this.clearButtonEnabled = true;
    };
    return Console;
}());
exports["default"] = Console;
