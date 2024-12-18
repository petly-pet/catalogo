function showSection() {
    const sections = ["Pro-Plan", "Formula", "Nomade"];
    const selected = document.getElementById("sectionSelector").value;

    sections.forEach(section => {
        document.getElementById(section).classList.add("hidden");
    });

    document.getElementById(selected).classList.remove("hidden");
}

function updatePrice(productId, originalPrice, price) {
    const originalPriceElement = document.getElementById(`original-price-${productId}`);
    const priceElement = document.getElementById(`price-${productId}`);

    originalPriceElement.textContent = `$${originalPrice.toFixed(3)}`;
    priceElement.textContent = `$${price.toFixed(3)}`;
}


