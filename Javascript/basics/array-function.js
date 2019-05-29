
// forEach
// forEach 함수의 파리미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다.
// 이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부른다.
const superheroes = ['아이언맨' , '캡틴 아메리카', '토르'];

superheroes.forEach(hero =>{
    console.log(hero);
});

// map
const array = [1,2,3,4,5,6,7,8];

//const suqared = [];
/* // for문
for(let i = 0; i < array.length; i++) {
    suqared.push(array[i] * array[i]);
} */

/* // forEach
array.forEach(n =>{
    suqared.push(n * n);
}); */

// map
// map 함수의 파라미터로는 변화를 주는 함수를 전달해줌.
const suqare = n => n * n;
const suqared = array.map(suqare);

console.log(suqared);

// 퀴즈

//10 보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
function countBiggerThanTen(numbers) {
   /* 방법 1.  
        let count = 0;
            numbers.forEach(n => {
                if(n > 10) {
                    count++;
                }
            });
            return count; */

    return numbers.filter(number => number > 10).length;

}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);