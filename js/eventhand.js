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
