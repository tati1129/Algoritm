// Задача: вызов лифта
//      В доме два лифта.
//      Реализовать алгоритм отправки наиближайшего на вызывающий этаж.
//      Алгоритм будет применяться в домах разной этажности.
//      Алгоритм будет применяться в домах с количеством > 2 лифтов
//      Пример:
//      в доме 19 этажей
//      работают лифт А и лифт В
//      лифт А находиться на 0 этаже
//      лифт В находиться на 8 этаже
//      на вход: 1
//      отправляем лифт А



function randomLift(a,b){ //ф-ция выбора рандомного лифта
    const arr = [a, b];
    const randInex =  Math.floor(Math.random()* arr.length);
    return arr[randInex];
}

function elevator(a, b, stage){
    let distanceA = 0;
    let distanceB = 0;
    if( a===b && a === stage){
        return `Elevators on your floor`
    }else if (a !== b && a === stage) {
        return  `Elevator A on your floor`;
    }else if (a !== b && b === stage) {
        return  `Elevator B on your floor`;
    }else if(a !== b !== stage){
        distanceA = Math.abs(stage - a);
        distanceB = Math.abs(stage - b);
        if (distanceA === distanceB){ //если оба лифта на одном этаже, выбираем рандомный
            let a = 'Elevator A on the way ';
            let b = 'Elevator B on the way ';
            return  `${randomLift(a, b)} in ${distanceA} stage`
        }else if(distanceA < distanceB){
           return  `Elevator A on the way in:  ${distanceA} stage`
        } else if(distanceA > distanceB){
            return  `Elevator B on the way in:  ${distanceB}  stage` 
        } 
    }
    return `Elevators on your floor`
}

console.log(elevator(0,8,1));
console.log(elevator(8,0,1));
console.log(elevator(0,0,0));
console.log(elevator(2,2,1));
console.log(elevator(8,2,6));