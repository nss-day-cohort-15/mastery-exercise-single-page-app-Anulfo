var globalGo = function() {
    var inputField = document.getElementById("inputField");
    var listenArea = document.getElementsByClassName("carCard");
        for(var i = 0; i < listenArea.length; i++) {
            var currentCard = listenArea[i];
            currentCard.addEventListener ("click", 
            function (evt){
                currentCard = evt.currentTarget;
                currentCard.addClassList
                inputField.removeEventListener("keyup", mirrorText)
                inputField.addEventListener("keyup", mirrorText)
                console.log(currentCard);
                inputField.value = "";
                inputField.focus();
                handleModifiableCLick();
            })
        }
}

function handleModifiableCLick() {
    console.log ("Element Clicked on", event.target);
    document.getElementById("inputField").focus();
    mirrorText(event.target);
}


function mirrorText (elementClicked) {
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
        console.log("I've been clicked");
        inputField.value = "";
        inputField.blur();
    })
}