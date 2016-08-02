var globalGo = function() {
    var listenArea = document.getElementsByClassName("modifiable");
        console.log(listenArea.length);
        for(var i = 0; i < listenArea.length; i++) {
                listenArea.item(i).addEventListener ("click", function () {
                    handleModifiableCLick();
                });
            }
}

function handleModifiableCLick(mouseEvent) {
    var elementClicked = event.target.innerHTML;
    console.log ("Element Clicked on", elementClicked);
    
}
