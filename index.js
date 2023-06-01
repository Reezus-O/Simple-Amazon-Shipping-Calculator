let calculateButton = document.querySelector(".calculate");
let finalCostElement = document.querySelector(".shipping-cost");

calculateButton.addEventListener("click", function () {
    let inputValue = Number(document.getElementById("cost").value);

    if (inputValue <= 40) {
        finalCostElement.innerText = `$${inputValue + 10}`;
    } else {
        finalCostElement.innerText = `$${inputValue}`;
    }
});


document.addEventListener("keydown", function(event) {
    if(event.key === "Enter" ){
        let inputValue = Number(document.getElementById("cost").value);

        if (inputValue <= 40) {
            finalCostElement.innerText = `$${inputValue + 10}`;
        } else {
            finalCostElement.innerText = `$${inputValue}`;
        }
    }
})

