// let min1 = prompt('введите min число 1го массива');
// let max1 = prompt('введите max число 1го массива');
// let min2 = prompt('введите min число 2го массива');
// let max2 = prompt('введите max число 2го массива');
// let n1 = prompt('задайте длину 1го массива');
// let n2 = prompt('задайте длину 2го массива');
// let index = prompt('введите index искомого элемента в пределах суммы длины заданных ранее массивов' + `${n1}+${n2}`);


function getInt(min, max) { //ф-ция кот выдает рандомные значения от заданных min и max
    return Math.floor(Math.random() * (max - min) + min);
  }

function createArray(n) { //создание массива, длину принимает в аргументы и заполняет массив нулями
    return Array.from({ length: n },
      (_, i) => 0);
  }

function fill(collection, minValue, maxValue) { //ф-ция создает массив из рандомных чисел, в диапазоне от min до max
    let size = collection.length;
    for (let i = 0; i < size; i++) {
      collection[i] = getInt(minValue, maxValue);
    }
    collection = collection.sort((x, y) => x - y);// сортировка полученного массива
  }

function findIndex(arr1, arr2, index) {
    const size = (arr1.length + arr2.length);
    const newArr = Array(size).fill(0);

    let i = 0; let j = 0; let k = 0;
    while(i < arr1.length  &&  j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr[k] = arr1[i]
            i++;
        } else if(arr1[i] >= arr2[j]){
            newArr[k] = arr2[j]
            j++;
        }
        k++;
    }
    while(i < arr1.length) newArr[k++] = arr1[i++];
    while(j < arr2.length) newArr[k++] = arr2[j++];
    
return newArr[index-1] 
}

// let arr1 = createArray(n)
// createArray(fill(arr1, min1, max1));

// let arr2 = createArray(n2)
// createArray(fill(arr2, min2, max2));





const comp = (x, y) => x - y; 

const minValue = 1;
const maxValue = 15; 

const a = Array.from({ length: getInt(6, 9) }, 
  (_, i) => getInt(minValue, maxValue)).sort(comp); 

document.write(`a = ${a}<br>`); 


const b = Array.from({ length: getInt(5, 12) }, 
  (_, i) => getInt(minValue, maxValue)).sort(comp); 

document.write(`a = ${b}<br>`); 



const r = a.concat(b).sort(comp); //в нов массив объединяем 2 наши массива и сортируем их

const k = getInt(0, r.length); //индекс рандомный, от 0 до длины отсорт массива

document.write(`k = ${k}<br>`); 
document.write(`r = ${r}<br>`); 
document.write(`${findIndex(a, b, k)} << get obtained<br>`); 
document.write(`${r[k]} << expected<br>`); 
document.write(`+`); 


// document.write(`массив1 = ${arr1}<br>`)
// document.write(`массив2 =  ${arr2}<br>`)
// document.write('')
// document.write(`index = ${findIndex(arr1, arr2, index)}`)