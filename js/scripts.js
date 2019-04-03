$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();

var identVowels = ["a", "e", "i", "o", "u"];
var userArray = userInput.split('');

//var indexArray = userArray.join('');
//console.log(indexArray);
console.log(userArray);


// this will return ay to every single word that starts with a vowel
function wordsStartswithAVowel (array){
  for (var i = 0; i < 1; i += 1) {
    if (identVowels.includes(array[i]))
    userArray.push("ay");
    return userArray.join('');
}
}
console.log(wordsStartswithAVowel(userArray))

var indexPos = identVowels.indexOf(userArray);
  return true;


//console.log(indexPos);
// var firstVowel = userArray.findIndex(indentVowels);
//   if (firstVowel > 0); {
//     var sliceArray = userArray.slice(0, firstVowel);
//   }


//console.log(identVowels);


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


var output = wordsStartswithAVowel(userArray).join('');
console.log(output);











// user interface logic

  });
});
