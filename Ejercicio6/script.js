/*
Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/

const input = [3,6,12,5,100,1];

console.log("Entrada: " + input);

burbuja(input);

console.log("Salida: " + input);

function burbuja(array) {
    let numberIndexLeft, numberIndexRight, swap;
    do{
        swap = 0;
        for (let i=0; i<=array.length-2;i++){
            if(array[i]>array[i+1]){
                swap = true;
                numberIndexLeft = array[i];
                numberIndexRight = array[i+1];
                array.splice(i,1,numberIndexRight);
                array.splice(i+1,1,numberIndexLeft);
                swap ++;
            } 
        }
    }while(swap != 0)
}