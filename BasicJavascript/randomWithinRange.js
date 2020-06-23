function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
// Math random generates a number between 0 and less than 1 (will never return 1)
// the number is then multiplied by the range (the difference between the max and the minimum) + 1, so that the number can be the maximum
// Math floor round the number to the nearest whole number
// the minium is then added, so that if the result of the above is 0, the minimum is returned instead of 0
