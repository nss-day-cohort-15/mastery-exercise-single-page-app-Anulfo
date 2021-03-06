 var carArray = (function (displayer) {
    displayer.displayOnScreen = function () {
        var carDisplay = [];
        var arrayToScreen = document.querySelector("#carCards");
        console.log(arrayToScreen);
        var carArrayParsed = displayer.getInventory()
        for (var i = 0; i < carArrayParsed.length;i++){
            var currentCar = carArrayParsed[i]
            if (i % 3 === 0){
                console.log("open row");
                carDisplay += `<div class = "row">`
            };

            carDisplay += `<div class="carCard col-md-4" style="border-color:${currentCar.color}">
            <h1>${currentCar.make}</h1>
            <h2>${currentCar.model}</h2>
            <h3>${currentCar.year}</h3>
            <p>${currentCar.price} $</p>
            <p>${currentCar.color}</p>
            <p>${currentCar.purchased}<p>
            <p class="description">${currentCar.description}<p>
            </div>`

            if ((i+1) / 3 === 1){
                console.log('closing row');
                carDisplay += `</div>`;
            }
        }
        console.log(arrayToScreen);
            arrayToScreen.innerHTML = carDisplay;
            carArray.activateEvents();
    }
    return displayer;
  
}(carArray))

carArray.getJson(carArray.displayOnScreen); 
