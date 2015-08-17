// TOY PROBLEM FROM codewars.com
// AUTHORED BY Dan Nolan (codewars.com/users/noLan)

/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} entireBottleWeight:
*  The weight of the entire bottle and its contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/

function contentWeight(entireBottleWeight, scale) {
  
  var scaleArray = scale.split(' ');
  var multiplier = scaleArray[0];
      multiplier *= 1;
  var bottleWeight, contentWeight;

  if (scaleArray[2] === "larger") {
    bottleWeight = entireBottleWeight / (multiplier + 1);
    contentWeight = multiplier * bottleWeight;
  } else {
    entireBottleWeight = entireBottleWeight * multiplier;
    contentWeight = (entireBottleWeight / (multiplier + 1)) / multiplier;
  }

  return contentWeight;
}