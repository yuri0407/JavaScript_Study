/*
    정수로 채워진 배열에서 홀수만 출력하기
    2021. 9. 23.

    구현조건 : for-of를 사용하기
*/
let array = [3, 32, 53, 48, 49];

for(let item of array){
    if(item % 2 > 0){           //item이 홀수이면
        console.log(item);
    }
}