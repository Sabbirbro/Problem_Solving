// function to calculate the area of a circle
function calculateCircleArea(radius) {
    // use the Math.PI constant to get the value of pi
    return Math.PI * Math.pow(radius, 2);
  }
  
  // call the function with a radius of 5
  let circleArea = calculateCircleArea(6);
  
  // log the area to the console
  console.log(circleArea); // Output: 78.53981633974483