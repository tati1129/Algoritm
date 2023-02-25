// Описание занятия: Оценить сложность алгоритма
// В нотации О-большое


// task #0							O(1)+O(1)* ( O(n-1)+O(1)+O(1)+O(1)) => O(n²) Квадратичный
let arr = [9, 3, 7, 4, 1, 2];				
alert(arr);					O(1)
 for (let i = 0; i < arr.length; i++) {		//O(n)
  for (let j = 0; j < arr.length - i; j++) {	   //O(n-1)
    if (arr[j] > arr[j + 1]) {				
      let t = arr[j];					//O(1)
      arr[j] = arr[j + 1];				//O(1)
      arr[j + 1] = t;					//O(1)
    }
  }
}
alert(arr);


// task #1                      O(1)  ||  O(n) * (O(n)+O(1)) => O(n²) Квадратичный
START
READ number n
 IF n == 1 THEN return          //O(1)
FOR i = 1, i <= n, i + 1        //O(n)
  FOR j = 1; j <= n, j + 1      //O(n)
    print "*"                   //O(1)
    BREAK
END

// task #2                      O(1) + O(n/2) * (O(log n) + O(1)) => O(n log n) Линейно-логарифмичный
START
READ number n
numbers i = 0, j = 0, a = 0     //O(1)
FOR i = n/2, i <= n; i + 1	    //O(n/2)
  FOR j = 2, j <= n, j * 2      //O(log n)
    a = a + n / 2               //O(1)
END
 
// task #3                      O(1) + O(n) * (O(n-1) + O(1)) => O(n²) Квадратичный
START
READ number n
number a = 0                    //O(1)
FOR i = 0, i < n, i + 1         //O(n)
  FOR j = n, j > i, j - 1       //O(n-1)
    a = a + i + j               //O(1)
END


// task #4                      O(1) + O(O(log n) + O(1)) => O(log n) Логарифмический
START
READ number n
numbers a = 0, i = n            //O(1)
WHILE i > 0                     //O(log n)
  a = a + i                     //O(1)
  i = i / 2                     
END