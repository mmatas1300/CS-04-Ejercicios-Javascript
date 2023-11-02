/*
Exercise #2
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/


const misNumeros = [1,2,4,5];

//---------map()-------------------

function duplicarElemento(array){
    array = array.map((x) => x*2);
    console.log(array);
}

duplicarElemento(misNumeros);

//----------for------------------

function duplicarElementoFor(array){
    for(let i = 0; i<=array.length-1; i++){
        array[i] = array[i]*2;
    }
    console.log(array);
}

duplicarElementoFor(misNumeros);