function displayOnScreen (carArrayParsed) {
    var carDisplay = [];
    var arrayToScreen = document.getElementById("carCards");
    
    for (var i = 0; i < carArrayParsed.length;i++){
    var currentCar = carArrayParsed[i]
        carDisplay += `<div class="carCard">
        <h1 class="modifiable">${currentCar.make}</h1>
        <h2 class="modifiable">${currentCar.model}</h2>
        <h3 class="modifiable">${currentCar.year}</h3>
        <p  class="modifiable">${currentCar.price}</p>
        <p  class="modifiable">${currentCar.color}</p>
        <p  class="modifiable">${currentCar.purchased}<p>
        <p  class="modifiable">${currentCar.description}<p>
        </div>`
    }
        arrayToScreen.innerHTML = carDisplay;
        globalGo()
}



carArray.getJson(displayOnScreen);