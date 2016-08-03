var globalGo = function() {
    var listenArea = document.getElementsByClassName("modifiable");
        console.log(listenArea.length);
        for(var i = 0; i < listenArea.length; i++) {
                listenArea.item(i).addEventListener ("click", 
                function (){
                    console.log("Clicked");
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
    console.log(elementClicked);
    var inputField = document.getElementById("inputField");
    inputField.addEventListener("keyup", function (evt) {
        elementClicked.innerHTML = inputField.value;
    });
}

function doneButton () {
    var button = document.getElementById("doneButton");
    button.addEventListener("click", function () {
        console.log("I've been clicked");


    })
}




