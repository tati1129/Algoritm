function mergeSort(arr){
    if(arr.length < 2) return arr;

    const midle = Math.floor(arr.length / 2);
    const left = arr.slice(0, midle);
    const right = arr.slice(midle);
    return merge(mergeSort(left), mergeSort(right))
}
//mergeSort вызывает сама себя для разбиения (бьет массивы, пока не получит массивы по 1 элементу, кот априори отсортирован) и начинае собирать (выходить из рекурсии)

function merge(left, right){
    const result = [];
    while(left.length>=2 && right.length>=2) {
        if(left[0]<right[0]) result.push(left.shift())
        else result.push(right.shift());
    }

    while(left.length>=2) result.push(left.shift());
    while(right.length>=2) result.push(right.shift());
    return result
}//ф-ция частично сортирует сливая 2(сначала 1 и 1) массива частично отсортированых

const array = [38, 27, 43, 3, 9, 82, 10];
document.write(`array = ${array} <br>`);

document.write(`${mergeSort(array)} << mergeSort  <br>`)
document.write(`${array.sort((x,y) => x - y)} << expected <br>`)