// Описание занятия: Оценить сложность алгоритма
// В нотации О-большое

import { count } from "console";


// task #0							O(1)+O(1)+O(1)+ O(n)* ( O(n-1)+O(1)+O(1)+O(1)(1)) => O(n²) Квадратичный
let arr = [9, 3, 7, 4, 1, 2];	// 	O(1)			
alert(arr);					          //  O(1)
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
READ number n                   //O(1)              
numbers i = 0, j = 0, a = 0     //O(1)                
FOR i = n/2, i <= n; i + 1	    //O(n/2)            
  FOR j = 2, j <= n, j * 2      //O(log n)          
    a = a + n / 2               //O(1)             
END                             //                  
//                              //                    
                                //                   7       
                                //                  


// task #3                      O(1) + O(n) * (O(n-1) + O(1)) => O(n²) Квадратичный
START
READ number n
number a = 0                    //O(1)
FOR i = 0, i < n, i + 1         //O(n)
  FOR j = n, j > i, j - 1       //O(n-1)
    a = a + i + j               //O(1)
END


// task #4                      O(1)+O(1)+O(1) + O(O(log n) + O(2)+O(2)) => O(log n) Логарифмический
START                              //                 n         count итераций
READ number n                   //O(1)                1           1
numbers a = 0, i = n            //O(1)                2...3       2
WHILE i > 0                     //O(log n)            4...7       3
  a = a + i                     //O(2)                8...15      4
  i = i / 2                     //O(2)                16...31     5 
END                                             //    32...63     6
                                                //    64..127     7