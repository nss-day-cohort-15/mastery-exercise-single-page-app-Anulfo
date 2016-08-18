"use strict";
    var carArrayParsed = [];

    var getJson = function () {
        return new Promise ( function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "inventory.json");
            xhr.send();
            xhr.addEventListener("load", function(evt) {
                carArrayParsed = JSON.parse(this.responseText).carArray;
                resolve(carArrayParsed);
            });
        });
    };

  var getInventory = function () {
        return carArrayParsed;
    };
module.exports = {getInventory, getJson};

