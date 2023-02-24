// Найти сумму трёх чисел
// По двум заданным числам проверять является ли одно квадратом другого
// На промежутке от 1 до N, показать кубы чисел, заканчивающихся на четную цифру

function summa() {
    var a;
    var b;
    var c;
    var summ;
    
    window.alert("введите  число a: ");
    a = Number(window.prompt('Enter a value for a'));
    window.alert("введите  число b: ");
    b = Number(window.prompt('Enter a value for b'));
    window.alert("введите  число c: ");
    c = Number(window.prompt('Enter a value for c'));
    summ = a + b + c;
    window.alert("summ " + a + "," + b + "," + c + "  is: " + summ);
}



function square() {
    var a;
    
    window.alert("введите число a:  ");
    a = Number(window.prompt('Enter a value for a'));
    var b;
    
    window.alert("введите число b:  ");
    b = Number(window.prompt('Enter a value for b'));
    if (a == b) {
        if (a == 1 || a == 0 || b == 1 || b == 0) {
            window.alert("a = b*b   and   b = a*a ");
        }
    } else {
        if (a > b && a == b * b) {
            window.alert("a = b * b ");
        } else {
            if (b > a && b == a * a) {
                window.alert("b = a * a ");
            }
        }
    }
}

function cube1() {
    var n;
    
    window.alert("введите  число N: ");
    n = Number(window.prompt('Enter a value for n'));
    var i;
    
    i = 1;
    var cube;
    
    while (i <= n) {
        cube = i * i * i;
        if (cube % 2 == 0) {
            window.alert(cube);
        }
        i = i + 1;
    }
}

function cube2() {
    var n;
    
    window.alert("введите  число N: ");
    n = Number(window.prompt('Enter a value for n'));
    var i;
    
    i = 1;
    var cube;
    
    while (i <= n) {
        if (i % 2 == 0) {
            cube = i * i * i;
            window.alert(cube);
        }
        i = i + 1;
    }
}
