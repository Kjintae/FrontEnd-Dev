
// forEach
// forEach 함수의 파리미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다.
// 이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부른다.
const superheroes = ['아이언맨' , '캡틴 아메리카', '토르'];

superheroes.forEach(hero =>{ // hero 는 각 원소를 가르킴.
    console.log('forEach:'+hero);
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
console.log('map:'+suqared);


//splice : 특정 항목을 제거할 때 사용
const number = [10, 20, 30, 40];
const index = number.indexOf(30);
number.splice(index,1); // 첫번 쨰 파라미터는 어떤 인덱스부터 지울지를 의미, 두 번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미
console.log('splice::'+number);

//shift : 첫번 째 원소를 배열에서 추출.(추출하는 과정에서 배열에서 해당원소는 사라짐.)
const numbers =[10, 20, 30, 40];
const value = numbers.shift();
console.log('shift::'+value);
console.log('shift numbers::'+numbers);

//pop : push의 반대. pop은 맨 마지막 항목을 추출합니다.
const popNumber = [10, 20, 30, 40];
const values= popNumber.pop();
console.log('pop::'+values);
console.log('pop numbers::'+popNumber);

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