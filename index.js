let calculateButton = document.querySelector(".calculate");
let finalCostElement = document.querySelector(".shipping-cost");

function calculateTotal() {
    let inputValue = Number(document.getElementById("cost").value);

    if (inputValue <= 40) {
        finalCostElement.innerText = `$${inputValue + 10}`;
    } else {
        finalCostElement.innerText = `$${inputValue}`;
    }
}

calculateButton.addEventListener("click", function () {
    calculateTotal();
});


document.addEventListener("keydown", function (event) {
    if (event.key === `Enter`) {
        calculateTotal();
    }
})

