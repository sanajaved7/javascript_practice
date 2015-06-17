//function that takes in an array and counts the number of strings in the array and returns the count

function numStrings(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (typeof list[i] == "string") {
        count++;
    }
  }
  return count;
}
