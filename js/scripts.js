$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();

var identVowels = ["a", "e", "i", "o", "u"]
var userArray = userInput.split('');

//var indexArray = userArray.join('');
//console.log(indexArray);
console.log(userArray);


// this will return ay to every single word that starts with a vowel
for (var i = 0; i < 1; i += 1) {
  if (identVowels.includes(userArray[i]))
   userArray.push("ay");
}
 var output = userArray.join('');
 //
 console.log(output);

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













// user interface logic

  });
});
