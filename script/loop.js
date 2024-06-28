/* 반복문
- for문
- while문
*/

// 실습: 피보나치 수열 만들기

var a = 0;
var b = 1;
var c;

var x = prompt('몇 번째 항을 알아볼까요?: ');

if (x !== 1 && x !== 2){
    for (var i = 0; i < x-2; i++){
        c = a+b;
        a = b;
        b = c;
    }
} else if (x === 1){
    console.log(a)
} else if (x === 2){
    console.log(b)
}

console.log(c);     // 이런식으로 하는건지는 모르겠음