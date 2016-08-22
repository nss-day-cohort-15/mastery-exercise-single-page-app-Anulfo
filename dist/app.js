(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var inventory = require ("./quiz");
var activate = require ("./eventhand");
console.log(">>>?",inventory);
    var displayOnScreen = function (carArrayParsed) {
        console.log(carArrayParsed);
        var carDisplay = [];
        var arrayToScreen = document.querySelector("#carCards");
        console.log(arrayToScreen);
        // var carArrayParsed = inventory.getInventory();
        for (var i = 0; i < carArrayParsed.length;i++){
            var currentCar = carArrayParsed[i];
            if (i % 3 === 0){
                console.log("open row");
                carDisplay += `<div class = "row">`;
            }

            carDisplay += `<div class="carCard col-md-4" style="border-color:${currentCar.color}">
            <h1>${currentCar.make}</h1>
            <h2>${currentCar.model}</h2>
            <h3>${currentCar.year}</h3>
            <p>${currentCar.price} $</p>
            <p>${currentCar.color}</p>
            <p>${currentCar.purchased}<p>
            <p class="description">${currentCar.description}<p>
            </div>`;

            if ((i+1) / 3 === 1){
                console.log('closing row');
                carDisplay += `</div>`;
            }
        }
        console.log(arrayToScreen);
            arrayToScreen.innerHTML = carDisplay;
            activate();
    };
  

inventory.getJson(displayOnScreen); 

},{"./eventhand":2,"./quiz":3}],2:[function(require,module,exports){
"use strict";
        var activateEvents = function () {
            var inputField = document.getElementById("inputField");
            var listenArea = document.getElementsByClassName("carCard");
                for(var i = 0; i < listenArea.length; i++) {
                    var currentCard = listenArea[i];
                    currentCard.addEventListener("click", 
                    function (evt){
                        console.log(evt.currentTarget);
                        var selectedCard = evt.currentTarget;
                        inputField.value = "";
                        inputField.focus();
                        eventRemover(listenArea);
                        handleModifiableCLick(selectedCard);
                    });
                }

        var button = document.getElementById("doneButton");
        button.addEventListener("click", function (evt) {
            inputField.value = "";
            inputField.blur();
            eventRemover(listenArea);
            // remove selected class
        });

        function eventRemover (listenArea){
            for (var i = 0; i < listenArea.length; i++){
                listenArea[i].classList.remove("selected");   
            inputField.removeEventListener("keyup", mirrorText);
            }
        }


        function handleModifiableCLick(selectedCard) {
            selectedCard.classList.add("selected");
            inputField.addEventListener("keyup", mirrorText);
        }


        function mirrorText (evt) {
            // console.log(elementClicked);
            var currentCar = document.querySelector('.selected');
            var carDescription = currentCar.querySelector('.description');
            var inputField = evt.target;
            carDescription.innerHTML = inputField.value;
            enterButton(evt);
        }

        function enterButton (evt) {
            var inputField = evt.target;
            if (evt.keyCode == 13 ) {
                inputField.removeEventListener("keyup", mirrorText);  
                    inputField.value = "";
                    inputField.blur();
                    eventRemover(listenArea); 
            }
        }
    };

module.exports = activateEvents;

},{}],3:[function(require,module,exports){
"use strict";
    var carArrayParsed = [];
        var getJson = function (callback) {
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

},{}]},{},[1]);
