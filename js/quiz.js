"use strict";
var carArray = (function (displayer) {
    var carArrayParsed = [];
    return {
        getJson: function (callback) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "inventory.json");
            xhr.addEventListener("load", function(evt) {
                console.log('loaded');
                carArrayParsed = JSON.parse(this.responseText).carArray;
                callback(carArrayParsed);
            });
        xhr.send();
        },
        getInventory: function () {
            return carArrayParsed;
        }
    };
}(carArray || {}));

