//For the minigame (spin the wheel)
function shuffle(array) {
    var currentIndex = array.length,
    randomIndex;

    while (0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin() {
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");

    // Disable the spin button during animation
    const spinButton = document.querySelector(".spin");
    spinButton.disabled = true;

    // Randomly shuffle the items
    let DiscountVoucher = shuffle([1890, 2250, 2610]);
    let LoyaltyPoint = shuffle([1850, 2210, 2570]);
    let OffPurchase = shuffle([1770, 2130, 2490]);
    let GiftCard = shuffle([1810, 2170, 2530]);
    let TryAgain = shuffle([1750, 2110, 2470]);   
    let VipMembership = shuffle([1630, 1990, 2290]);

    let results = shuffle([
        DiscountVoucher[0],
        LoyaltyPoint[0],
        OffPurchase[0],
        GiftCard[0],
        TryAgain[0],
        VipMembership[0],
    ]);

    // Display the prize won
    if (DiscountVoucher.includes(results[0])) SelectItem = "Discount Vouchers";
    if (LoyaltyPoint.includes(results[0])) SelectItem = "40 Loyalty Points", "70 Loyalty Points";
    if (OffPurchase.includes(results[0])) SelectItem = "$30 Off purchase", "$50 0ff purchase";
    if (GiftCard.includes(results[0])) SelectItem = "Gift card";
    if (TryAgain.includes(results[0])) SelectItem = "Try Again Next Time";
    if (VipMembership.includes(results[0])) SelectItem = "VIP Membership";


    // Apply rotation animation
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");

    setTimeout(function() {
        alert("You Won: " + SelectItem)
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
} 

/* function spin() {
    const box = document.getElementById("box");
    const spinButton = document.querySelector(".spin");
    spinButton.disabled = true;

    const items = [
        { name: "Discount Vouchers", angles: [1890, 2250, 2610] },
        { name: "40 Loyalty Points", angles: [1420, 1900, 2100] },
        { name: "$30 off purchase", angles: [1750, 2110, 2470] },
        { name: "Gift card", angles: [1480, 1840, 2160] },
        { name: "Try Again Next Time", angles: [1570, 1930, 2290] },
        { name: "VIP Membership", angles: [1530, 1870, 2200] },
        { name: "$50 off purchase", angles: [1810, 2170, 2530] },
        { name: "70 Loyalty Points", angles: [1550, 1980, 2250] },
        { name: "Discount Vouchers", angles: [1850, 2210, 2570] },
        { name: "Try Again Next Time", angles: [1630, 1990, 2350] }
    ];

    const shuffledItems = shuffle(items);
    const selectedItem = shuffledItems[Math.floor(Math.random() * shuffledItems.length)];

    // Calculate the total number of angles
    const totalAngles = selectedItem.angles.length;
    
    // Randomly select an angle from the selected item's angles
    const selectedAngleIndex = Math.floor(Math.random() * totalAngles);
    const selectedAngle = selectedItem.angles[selectedAngleIndex];

    // Calculate the final angle to rotate
    const finalAngle = 360 / totalAngles * selectedAngleIndex + (360 / totalAngles) / 2;

    box.style.setProperty("transition", "transform 5s ease");
    box.style.transform = `rotate(${finalAngle}deg)`;

    setTimeout(function () {
        alert("You won: " + selectedItem);
        box.style.transition = "none";
        box.style.transform = "rotate(90deg)";
        spinButton.disabled = false;
    }, 5000);
} */
