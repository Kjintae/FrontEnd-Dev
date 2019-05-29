# Javascritp study

## Javascript function

### 1. 즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression) : 정의되자마자 즉시 실행되는 함수
 ``` 
 (function () {
     statements
  })(); 
 ```
 
 ### 2. 기본함수
 ```
 function add(a,b) {
  return a + b;
 }
 
 const sum = add(1,2);
 console.log(sum); => 3
 ```
 
 - 함수를 만들 때는 **function** 키워들 사용.
 - 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수) 라고 부른다.
 - 함수 내부에서 **return** 키워드를 사용하여 함수의 결과물을 지정할 수 있다. **return** 하게되면 함수가 끝난다.
 
 ### 3. 화살표 함수 (arrow function)
 ```
 const add = (a,b) => {
  return a + b;
 }
 
 console.log(add(1,2)); => 3
 ```
 
 - **function** 키워드 대신에 **=>** 화살표 문자를 사용해서 구현.
 - 화살의 좌측에는 함수의 **파라미터**, 화살표 우측에는 코드 블록이 들어옴.
 - 화살표 함수는 익명 함수로만 사용할 수 있다. 따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.
 
 만약 코드 블록 내부에서 바로 return 하는 경우는 다음과 같이 줄여서 쓸 수있다.
 
 ```
 const add =(a,b) => a + b;
 console.log(add(1,2)); => 3
 ```
 
 ### 4. 생성자 함수
 ```
 //생성자 함수
 function Person(name) {
  this.name =  name;
 }
 
 // 생성자 함수 호출
 var me = new Person('Lee');
 console.log(me); => {name : "Lee"}
 
 // new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
 var you = Person('Kim');
 console.log(you); => undefined
 ```
 
 - 생성자 함수는 말 그대로 객체를 생성하는 역할을 한다.
 - 기존 함수에 ##new## 연사자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
 - 일반적으로 생성자 함수명은 첫문자를 대문자로 기술하여 혼란을 방지한다.
 
 ### 5. 객체 리터럴 방식과 생성자 함수 방식의 차이.
 ```
 // 객체 리터럴 방식
 var foo = {
  name: 'foo',
  gender: 'male'
 }

console.dir(foo);

// 생성자 함수 방식
function Person(name,gender) {
 this.name = name;
 this.gender = gender;
}

var me = new Person('Lee', 'male);
console.dir(me);
```

- 객체 리터럴 방식과 생성자 함수 방식의 차이는 **프로토타입 객체**에 있다.
- 객체 리터럴 방식의 경우, 생성된 객체의 프로토타입 객체는 **Object.prototype**이다.
- 생성자 함수 방식의 경우, 생성된 객체의 프로토타입 객체는 **Person.prototype**이다.
