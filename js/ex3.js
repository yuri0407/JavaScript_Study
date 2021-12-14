/*
    배열의 요소와 요소의 자료형을 함께 출력하기
    출력형식 : 요소값 (자료형)   예: 123 (number)
    2021. 9. 23.

    사용할 반복문: for-in
*/
let array = [3, "DIT", false, undefined, { }, function(){ }];

for(let i in array){
    console.log(`array[${i}] = ${array[i]}, (${typeof(array[i])})`);
}

//typeof() - 해당되는 데이터의 자료형 출력
//한꺼번에 긴 내용을 적을 때는 템플릿 문자를 사용하는 게 훨씬 편함

console.log("===============================");
//for-of문을 이용하여 위와 비슷한 출력하기
//출력형식: 요소값(자료형)

for(let item in array){
    console.log(item + ", (" + typeof(item) + ")");
}

console.log("===============================");


for(let item in array){
    console.log(`${item}, ${typeof(item)})`);
}