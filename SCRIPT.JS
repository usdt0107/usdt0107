let mode = "buy";

function setMode(selectedMode) {

    mode = selectedMode;

    const buyTab = document.getElementById("buyTab");
    const sellTab = document.getElementById("sellTab");

    const title = document.getElementById("marketTitle");
    const currency = document.getElementById("currency");

    if (mode === "buy") {

        buyTab.classList.add("active");
        sellTab.classList.remove("active");

        title.innerText = "Buy USDT Offers";
        currency.innerText = "USDT";

    } else {

        sellTab.classList.add("active");
        buyTab.classList.remove("active");

        title.innerText = "Sell USDT Offers";
        currency.innerText = "USDT";
    }

    calculate();
}


function calculate() {

    const amount =
        Number(document.getElementById("amount").value) || 0;

    const price =
        Number(document.getElementById("price").value) || 0;

    const total = amount * price;

    document.getElementById("total").innerText =
        "₹" + total.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}


function startTrade(trader) {

    alert(
        "Demo Trade\n\n" +
        "Trader: " + trader +
        "\n\nReal trading functionality will be added later."
    );
}