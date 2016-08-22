"use strict";
<<<<<<< HEAD
var carArray = (function (displayer) {
    var carArrayParsed = [];
    return {
        getJson: function (callback) {
=======
    var carArrayParsed = [];
        var getJson = function (callback) {
>>>>>>> 7b7a34a98198b92dca0c07fc14364e6c7c56ffc0
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "inventory.json");
            xhr.addEventListener("load", function(evt) {
                console.log('loaded');
                carArrayParsed = JSON.parse(this.responseText).carArray;
                callback(carArrayParsed);
            });
        xhr.send();
        };
       var getInventory = function () {
            return carArrayParsed;
        };
module.exports = {getJson, getInventory};
