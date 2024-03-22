//variables n such start here
let clickUpgrades = [
    {
        name: 'Sharpen Mandibles',
        price: 1,
        quantity: 1,
        multiplier: 1
    },
    {
        name: 'Adrenal Booster',
        price: 5,
        quantity: 0,
        multiplier: 5
    }
];

let automaticUpgrades = [
    {
        name: 'Hatch Drone',
        price: 10,
        quantity: 0,
        multiplier: 25
    },
    {
        name: 'Hatch Queen',
        price: 100,
        quantity: 0,
        multiplier: 50
    }
];
let minerals = 0
//variables n such end here

//code starts here

updatePage()
setInterval(autoMinerals, 3000)


//code ends here

//functions start here

function clickMinerals() {
    let clickPower = 0
    clickUpgrades.forEach(upgrade => {
        clickPower += upgrade.quantity * upgrade.multiplier
    });
    minerals += clickPower
    updatePage()
}

function autoMinerals() {
    let autoPower = 0
    automaticUpgrades.forEach(upgrade => {
        autoPower += upgrade.quantity * upgrade.multiplier
    });
    minerals += autoPower
    updatePage()
}

function upgrade(arrayName) {
    let upgrade = arrayName
    if (minerals >= upgrade.price) {
        upgrade.quantity++
        minerals -= upgrade.price
        upgrade.price += upgrade.multiplier
    }
    updatePage()
}

function updatePage() {


    let mineralsElm = document.getElementById(`mineral-count`)
    mineralsElm.innerHTML = `${minerals}`
    let mandiblesElm = document.getElementById(`mandible-count`)
    mandiblesElm.innerHTML = `${clickUpgrades[0].quantity}`
    let dronesElm = document.getElementById(`drone-count`)
    dronesElm.innerHTML = `${automaticUpgrades[0].quantity}`
    let adrenalElm = document.getElementById(`adrenal-count`)
    adrenalElm.innerHTML = `${clickUpgrades[1].quantity}`
    let queenElm = document.getElementById(`queen-count`)
    queenElm.innerHTML = `${automaticUpgrades[1].quantity}`

    let mandiblesPriceElm = document.getElementById(`mandibles-price`)
    mandiblesPriceElm.innerHTML = `${clickUpgrades[0].price}`
    let dronesPriceElm = document.getElementById(`drone-price`)
    dronesPriceElm.innerHTML = `${automaticUpgrades[0].price}`
    let adrenalPriceElm = document.getElementById(`adrenal-price`)
    adrenalPriceElm.innerHTML = `${clickUpgrades[1].price}`
    let queenPriceElm = document.getElementById(`queen-price`)
    queenPriceElm.innerHTML = `${automaticUpgrades[1].price}`

    let clickStatsElm = document.getElementById(`click-stats`)
    let clickStats = 0
    clickUpgrades.forEach(upgrade => {
        clickStats += upgrade.quantity * upgrade.multiplier

    });
    clickStatsElm.innerHTML = `${clickStats}`

    let autoStatsElm = document.getElementById(`auto-stats`)
    let autoStats = 0
    automaticUpgrades.forEach(upgrade => {
        autoStats += upgrade.quantity * upgrade.multiplier

    });
    autoStatsElm.innerHTML = `${autoStats}`
}

//functions end here