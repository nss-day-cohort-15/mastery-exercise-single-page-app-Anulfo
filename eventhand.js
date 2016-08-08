var carArray = (function (activate) {
        activate.activateEvents = function () {
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
                    })
                }

        function eventRemover (listenArea){
            console.log(listenArea)
            for (var i = 0; i < listenArea.length; i++){
                listenArea[i].classList.remove("selected");   
            }
        }


        function handleModifiableCLick(selectedCard) {
            inputField.removeEventListener("keyup", mirrorText);
            selectedCard.classList.add("selected");
            inputField.addEventListener("keyup", mirrorText);
            mirrorText(event.target);
        }


        function mirrorText (elementClicked) {
            console.log(elementClicked);
            var currentCar = document.querySelector('.selected')
            var carDescription = currentCar.querySelector('.description')
            var inputField = document.querySelector('#inputField');
            carDescription.innerHTML = inputField.value; 
            doneButton()
        }

        function doneButton () {
            var inputField = document.getElementById("inputField");
            var button = document.getElementById("doneButton");
            button.addEventListener("click", function () {
                inputField.value = "";
                inputField.blur();
            })
        }
    }
    return activate;
}(carArray))
