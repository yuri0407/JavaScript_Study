/*
    2021. 9. 16.
    선언된 배열의 원소를 역순으로 출력하기
*/
let a = ["apple", "mango", "kiwi", "banana", "melon"];

//배열의 원소값 역순으로 출력하기
//for문 사용

for(let i=a.length-1; i>=0; i--){
    console.log(`${a[i]}`);
}