var globalGo = function() {
    var listenArea = document.getElementsByClassName("modifiable");
        console.log(listenArea.length);
        for(var i = 0; i < listenArea.length; i++) {
                listenArea.item(i).addEventListener ("click", function () {
                    console.log("clicked");
                });
            }
}

function handleModifiableCLick(mouseEvent) {
    var elementClicked = MouseEvent.target.innerHTML;
    console.log ("Element Clicked on", elementClicked);
}
