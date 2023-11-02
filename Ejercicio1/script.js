/*
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/


//--------join()----------------------------

let arr = ["This", "is", "a", "sentence."];

function printOutString(array) {
  console.log(array.join(" "));
}

printOutString(arr);

//------- for --------------------------

function printOutStringForIf(array) {
  let sentence;
  for(let i=0; i<=array.length-1 ; i++){
      if(i === 0){
          sentence = array[i];
      } else{
          sentence = sentence + " " + array[i];
      }
  }
  console.log(sentence);
}

printOutStringForIf(arr);