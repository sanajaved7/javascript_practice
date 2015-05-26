//Build a function named changePowerTotal that takes in four parameters: The total power, generator ID for the current generator, the generator status (a string that says "on" or "off"), amount of power produced by the current generator.

//If the current generator is set to "on", then add to the total power generated. Or if the current generator is set to "off", then remove from the total power generated. Return the total power generated and alert the technician.

var totalPower = 0;
var powerAmount = 62;
var generatorID = prompt("What generator do you want to switch?")
var generatorStatus = prompt("Would you like to turn the generator off or on?")


function changePowerTotal(totalPower, generatorID, generatorStatus, powerAmount) {

    if (generatorStatus == 'on') {
        totalPower = totalPower + powerAmount;
        alert("Generator #" + generatorID + " is now on, adding " + powerAmount + " MW, for a total of " + totalPower + " MW!")
    }
    else {
        totalPower = totalPower - powerAmount;
        alert("Generator #" + generatorID + " is now off, removing " + powerAmount + " MW, for a total of " + totalPower + " MW!")
    }
    return totalPower;
}
