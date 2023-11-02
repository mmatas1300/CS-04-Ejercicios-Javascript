/*
Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const misNumeros = [1,2,3,4];

//--------------reduce()------------------------------

function productAndSum(array){
    sum=array.reduce((acomulador,valorActual) => acomulador+valorActual);
    product=array.reduce((acomulador,valorActual) => acomulador*valorActual);
    console.log("La suma es: " + sum + " y el productos es: "+ product);
}

productAndSum(misNumeros);

//----------------for----------------------------------

function productAndSumFor(array){
    let sum=0, product =1;
    for(let i=0; i<=array.length-1; i++){
        sum = array[i] + sum;
        product = array[i] * product;
    }
    console.log("La suma es: " + sum + " y el productos es: "+ product);
}

productAndSumFor(misNumeros);