## TodoList

### 1. 상태관리하기

- 컴포넌트들은 부모를 통하여 대화를 해야합니다.
- 내부 컴포넌트 끼리는 대화하지 않는다.
- Form, TodoItemList 에있는 인풋값과 변경시키는 함수 , todos 목록과 변경시키는 함수를 props로 App.js 에 전달해야 한다.
- 다른 컴포넌트끼리 직접 데이터를 전달하는 것은 **ref** 를 사용하여할 수 있지만 이것은 정말 비효율적인 방법이다. (리액트에서 일종의 안티패턴!!)

### 2. App.js

- 비구조화 할당
```
const {
  handleChange,
  handleCreate,
  handleKeyPress
} = this;
```
-> 이런식으로 비구조화 할당을 할 경우, this.handleChange 등 이런식으로 계속 this 룰 붙여줘야 하는 작업을 생략할 수 있다.
   이 작업은 만약에 원치 않으면 생략하고 this를 직접 붙여줘도 무방함.

### 2-1. App.js hadleCreate()

- 자바스크립트로 보통 배열안에 새 데이터를 집어넣을땐 주로 push를 사용하는데 리액트 state 에서 배열을 다룰 때는 **절대로** push를 사용하면 안됨 
```
let arrayOne = [];
let arrayTwo = arrayOne;
arrayOne.push(1);
console.log(arrayOne === arrayTwo); // true
```
-> push 를 통하여 데이터를 추가하면 배열에 값이 추가되긴 하지만 가르키고 있는 배열은 똑같기 때문에 비교할 수 없습니다. 최적화를 할 수 없음!!

-push 대신 **concat** 을 사용하자!!
```
let arrayOne = [];
let arrayTwo = arrayOne.concat(1);
console.log(arrayOne === arrayTwo); // false
```
