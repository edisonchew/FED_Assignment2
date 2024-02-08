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

    let SelectedItem;

    // Display the prize won
    if (DiscountVoucher.includes(results[0])) SelectedItem = "Discount Vouchers";
    else if (LoyaltyPoint.includes(results[0])) SelectedItem = "40 Loyalty Points", "70 Loyalty Points";
    else if (OffPurchase.includes(results[0])) SelectedItem = "$30 Off purchase", "$50 0ff purchase";
    else if (GiftCard.includes(results[0])) SelectedItem = "Gift card";
    else if (TryAgain.includes(results[0])) SelectedItem = "Try Again Next Time";
    else if (VipMembership.includes(results[0])) SelectedItem = "VIP Membership";


    // Apply rotation animation
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)"; 

    setTimeout(function() {
        alert('You Won: ' + SelectedItem)
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
        spinButton.disabled = false;
    }, 6000);
} 