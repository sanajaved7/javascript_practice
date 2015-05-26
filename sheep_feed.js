// Build a function called feedPerRanger that takes in current population of sheep and number of Park Rangers available during the day and returns the amount of feed that each Park Ranger should be responsible for on that day.

var currentPop = 200;
var currentRangers = 10;
function feedPerRanger(currentPop, currentRangers) {
   alert("Each Park Ranger should load " + ((currentPop*2)/currentRangers) + " lbs of feed today.");
}
