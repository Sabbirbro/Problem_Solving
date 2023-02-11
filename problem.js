//Code
var numbers = [1, 15, 5, 3, 7, 8];

var biggest = 0;

numbers.forEach(function(num) {
  if (num > biggest) {
    biggest = num;
  }
});

console.log("The biggest number is " + biggest);


