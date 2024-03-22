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
    }
];

let minerals = 0
//variables n such end here

//code starts here

updatePage()


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

function sharpenMandibles() {
    let mandibles = clickUpgrades[0]
    if (minerals >= mandibles.price) {
        mandibles.quantity++
        minerals -= mandibles.price
    }
    updatePage()
}

function adrenalBooster() {
    let adrenal = clickUpgrades[1]
    if (minerals >= adrenal.price) {
        adrenal.quantity++
        minerals -= adrenal.price
    }
    updatePage()
}

function hatchDrone() {
    let drones = automaticUpgrades[0]
    if (minerals >= drones.price) {
        drones.quantity++
        minerals -= drones.price
    }
    updatePage()
}

function updatePage() {
    let mineralsElm = document.getElementById(`mineral-count`)
    mineralsElm.innerHTML = `<h1>${minerals}<h1/>`
    let mandiblesElm = document.getElementById(`mandible-count`)
    mandiblesElm.innerHTML = `${clickUpgrades[0].quantity}`
    let dronesElm = document.getElementById(`drone-count`)
    dronesElm.innerHTML = `${automaticUpgrades[0].quantity}`
    let adrenalElm = document.getElementById(`adrenal-count`)
    adrenalElm.innerHTML = `${clickUpgrades[1].quantity}`


    let clickStatsElm = document.getElementById(`click-stats`)
    let clickStats = 0
    clickUpgrades.forEach(upgrade => {
        clickStats += upgrade.quantity * upgrade.multiplier

    });
    clickStatsElm.innerHTML = `${clickStats}`
}

//functions end here