var carArray = (function (displayer) {
    displayer.displayOnScreen = function () {
        var carDisplay = [];
        var arrayToScreen = document.querySelector(".row");
        console.log(arrayToScreen);
        var carArrayParsed = displayer.getInventory()
        for (var i = 0; i < carArrayParsed.length;i++){
        var currentCar = carArrayParsed[i]
            carDisplay += `<div class="carCard col-md-4" style="border-color:${currentCar.color}">
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
            carArray.activateEvents()
    }

    return displayer;
}(carArray))


carArray.getJson(carArray.displayOnScreen);