# React Basic

## React 설치 과정

### 1.Node.js / npm, yarn 설치하기
 - Node.js download -> https://nodejs.org/ko/download/
 - npm download -> terminal or cmd 'npm install'
 - Yarn download -> https://yarnpkg.com/lang/en/

### 2.Node.js / npm, yarn 설치 확인
 - Node.js version 확인 -> 'node -v'
 - npm version 확인 -> 'npm -v'
- Yarn version 확인 -> yarn --version (cmd 창에서 확인 가능하나 vscode 에서는 확인이 안되고있음.)

### 3.create-react-app 프로젝트 설치 및 생성
- 3-1 npm 으로 설치 -> npm install -g create-react-app
- 3-1 yarn 으로 설치 -> yarn -g add create-react-app
- 3-2 프로젝트 생성 -> create-react-app (프로젝트 이름)

### 4.프로젝트 확인
- 4-1 cd (프로젝트 이름)
- 4-2 npm start or yarn start

----------------------------------------------------------------------------------------------------------------------------------------

## props 와 state

### props
 - props는 부모 컴포넌트가 자식 컴포넌트에게 주는 값.
 - 자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props 를 직접 수정할 수 없다.
 - 자식이 받아온 props 값은 ``` this. ``` 키워드를 통하여 조회 할 수 있다.
 - ``` defaultProps ``` : props 를 빠트리거나 특정상황에 일부러 비워야 할 때 사용. props 를 기본값으로 설정하는것임.
 
### state
 - state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있다.
 
 ### this.setState  : state 에 있는 값을 바꾸기 위해 사용.
 -setState에 객체 대신 함수를 전달하기

 -기존코드
 ``` 
this.setState({
  number: this.state.number + 1
})
  ```
 위의 코드는 큰 문제는 아니지만, 굳이 또 this.state를 조회하고 있다.

 -조금 더 나은 문법
 ``` 
 this.setState(
  (state) => ({
    number: state.number
  })
);
 ```
 
 -비구조화 활당 문법
 ```
this.setState(
 ({ number }) => ({
    number: number + 1  
 })
);
```
위의 코드를 간단히 정리하자면
```
const { number } = this.state;
this.setState({
  number: number +1
})
```
로 코드를 덜 작성할 수 있다. (이 코드를 사용하자.)

----------------------------------------------------------------------------------------------------------------------------------------

## 이벤트 설정

### 이벤트 설정 시 주의사항.
 - 이벤트이름을 설정할 때 camelCase 로 설정해주어야 함. ex) onClick, onChange 등..
 - 이벤트에 전달해주는 값은 **함수** 여야 함. ex) onClick={this.handleIncrease}


----------------------------------------------------------------------------------------------------------------------------------------

## 함수형 컴포넌트

### 함수형 컴포넌트는 어떤 상황에서 사용하는가?

- **state** sk **라이프사이클API** 를 전혀 사용하지 않을 때, 그리고 해당 컴포넌트는 자체 기능은 따로 없고 **props 가 들어가면 뷰가 나온다는 것** 을 명시하기 위해 사용.

- 리액트 16에서는 함수형 컴포넌트가 클래스 컴포넌트 보다 성능이 조금 빨라졌다고 페이스북 개발자가 언급했습니다.

- ES5 형식
```
import React from 'react';

function Hello(props) {
 return (
  <div>Hello {props.name}</div>
 );
}

export default Hello;
```

- ES6 화살표 함수 형식
```
impot Reacr from 'react';

const Hello = (props) => {
 retun (
  <div>Hello {props.name}</div>
 );
}

export default Hello;
```

- 비구조화 할당 문법
```
import React from 'react';

const Hello =({name}) => {
 retun (
  <div>Hello {name}</div>
 );
}

export default Hello;

