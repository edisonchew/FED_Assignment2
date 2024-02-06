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

function spin(){
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    // Remove any existing animation
    box.style.animation = "none";

    // Trigger reflow to restart the animation
    void box.offsetWidth;

    // Apply the animation only when the spin button is clicked
    box.style.animation = "spin-wheel 5s linear";


    let DV = shuffle([1890, 2250, 2610]);
    let LP = shuffle([1850, 2210, 2570]);
    let TA = shuffle([1770, 2130, 2490]);
    let OP = shuffle([1810, 2170, 2530]);
    let VM = shuffle([1750, 2110, 2470])
    let GC = shuffle([1630, 1990, 2350]);

    let results = shuffle([
        DV[0],
        LP[0],
        TA[0],
        OP[0],
        VM[0],
        GC[0],
    ]);


    if (results[0] === DV[0]) SelectedItem = "Discount Vouchers";
    if (results[0] === LP[0]) SelectedItem = "40 Loyalty Points";
    if (results[0] === LP[0]) SelectedItem = "70 Loyalty Points";
    if (results[0] === TA[0]) SelectedItem = "Try Again Next Time";
    if (results[0] === OP[0]) SelectedItem = "$30 Off purchase";
    if (results[0] === OP[0]) SelectedItem = "$50 Off purchase";
    if (results[0] === VM[0]) SelectedItem = "VIP Membership";
    if (results[0] === GC[0]) SelectedItem = "Gift card";


    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate (" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        alert("You won: " + SelectedItem);
    }, 6000);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 7000);
}

function spin() {
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");

    // Disable the spin button during animation
    const spinButton = document.querySelector(".spin");
    spinButton.disabled = true;

    // Randomly shuffle the items
    let DV = shuffle([1890, 2250, 2610]);
    let LP = shuffle([1850, 2210, 2570]);
    let TA = shuffle([1770, 2130, 2490]);
    let OP = shuffle([1810, 2170, 2530]);
    let VM = shuffle([1750, 2110, 2470])
    let GC = shuffle([1630, 1990, 2350]);

    let results = shuffle([
        DV[0],
        LP[0],
        TA[0],
        OP[0],
        VM[0],
        GC[0],
    ]);

    // Calculate the final angle to rotate
    let finalAngle = results[0] - 90; // Subtract 90 to offset initial rotation

    // Apply rotation animation
    box.style.setProperty("transition", "transform 5s ease");
    box.style.transform = `rotate(${finalAngle}deg)`;

    // Enable the spin button after the animation completes
    setTimeout(function () {
        // Display the prize won
        let SelectItem = "";
        if (results[0] === DV[0]) SelectItem = "Discount Vouchers";
        if (results[0] === LP[0]) SelectItem = "40 Loyalty Points";
        if (results[0] === LP[1]) SelectItem = "70 Loyalty Points";
        if (results[0] === TA[0]) SelectItem = "Try Again Next Time";
        if (results[0] === OP[0]) SelectItem = "$30 Off purchase";
        if (results[0] === OP[1]) SelectItem = "$50 Off purchase";
        if (results[0] === VM[0]) SelectItem = "VIP Membership";
        if (results[0] === GC[0]) SelectItem = "Gift card";

        alert("You won: " + SelectItem);

        // Reset animation and rotation after displaying the prize
        box.style.transition = "none";
        box.style.transform = "rotate(90deg)";
        spinButton.disabled = false; // Re-enable the spin button
    }, 5000);
}
