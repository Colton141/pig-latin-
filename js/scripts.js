$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    
var identVowels = ["a" , "e", "i", "o", "u"]
var userArray = userInput.split(' ');


// tells the input to disregard numbers and replace with nothing//
var numbers = []
for (var i = 1; i <= 100; i++) {
  numbers.push(i)
}
for (var index = 0; index < userArray.length; index +=1) {
  if (numbers.includes(userArray[index])) {
    userArray[index] = "";
  }
}






console.log(userArray);








// user interface logic

  });
});
