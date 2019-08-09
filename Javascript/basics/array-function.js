
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

/* // forEach22222222222222222
array.forEach(n =>{
    suqared.push(n * n);
}); */

// map
// map 함수의 파라미터로는 변화를 주는 함수를 전달해줌.
const suqare = n => n * n;
const suqared = array.map(suqare);
console.log('map:'+suqared);


//splice : 특정 항목을 제거할 때 사용, 유용하게 쓰인다
const number = [10, 20, 30, 40];
const index = number.indexOf(30);
number.splice(index,1, 50); // 첫번 쨰 파라미터는 어떤 인덱스부터 지울지를 의미(배열의 변경을 시작하는 인덱스), 
                        // 두 번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미(배열에서 제거를 할 요소의 수)
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

// 파리미터의 기본값

// ES5 문법
function add(x,y) {
    x = x || 0;  // 매개변수 x에 인수를 할당하지 않은 경우, 기본값 0 을 할당함.
    y = y || 0;  // 매개변수 y에 인수를 할당하지 않은 경우, 기본값 0 을 할당함.

    return x + y;
}

console.log(add());
console.log(add(1,2));

// ES6 문법

const add2 = (x = 0, y = 0) => {
    return x + y;
}

console.log(add2());
console.log(add2(1,2));

// rest 파라미터

// rest 파라미터라는 기능을 이용해서 나머지 아규먼트를 배열로 사용할 수 있음.
// arguments 와는 다르게 배열이다.

const add3 = (a, b, ...rest) => {
    console.log(a); //5
    console.log(b); //3
    console.log(rest); // [9, 2, 1, 6]
}
add3(5, 3, 9, 2, 1, 6);

//Map

const m1 = new Map([['a', 1], ['b', 2]]);

console.log(m1);

const m2 = new Map();
m2.set('a', 1);
m2.set('b', 2);

console.log(m2);