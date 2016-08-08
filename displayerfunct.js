function displayOnScreen (carArrayParsed) {
    var carDisplay = [];
    var arrayToScreen = document.getElementById("carCards");
    
    for (var i = 0; i < carArrayParsed.length;i++){
    var currentCar = carArrayParsed[i]
        carDisplay += `<div class="carCard" style="border-color:${currentCar.color}">
        <h1>${currentCar.make}</h1>
        <h2>${currentCar.model}</h2>
        <h3>${currentCar.year}</h3>
        <p>${currentCar.price}</p>
        <p>${currentCar.color}</p>
        <p>${currentCar.purchased}<p>
        <p class="description">${currentCar.description}<p>
        </div>`
    }
        arrayToScreen.innerHTML = carDisplay;
        globalGo()
}



carArray.getJson(displayOnScreen);