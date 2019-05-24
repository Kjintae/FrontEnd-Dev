import React, { Component, Fragment } from 'react';  // 모듈을 불러올 때 import를 사용
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import LifeCycle from './LifeCycle';

class App extends Component {

  // 1. JSX 안에 자바스크립트 값 사용하기.
  // render() { //컴포넌트가 어떻게 생겼는지 정의하는 역할. 객체로 반환
  //   const name = 'react';
  //   return (
  //     <div>
  //       hello {name}!
  //     </div>
  //   );
  // }

  // 2.조건부 렌더링
  // JSX 내부에서는 보통 삼항연산자 or AND연산자 사용. if문을 사용할 수 없음.
  // render() {
  //   return (
  //     <div>
  //       {
  //         1 + 1 === 2 ? (<div>맞아요!</div>) : (<div>틀려요!</div>)
  //       }
  //     </div>
  //   )
  // }

  // 3. style 과 className

  // 3-1. style 사용
  // render() {
  //   const style = {
  //     backgroundColor: 'black',
  //     padding: '16px',
  //     color: 'white',
  //     fontSize: '12px'
  //   };
  //   return (
  //     <div style = {style}>
  //       <h1>안녕하세요.</h1>
  //     </div>
  //   );
  // }

  // 3-2. className 사용 - 리액트 컴포넌트에서는  class 대신에 className을 사용한다.
  // render() {
  //   return (
  //     <div className = "App">
  //       <h1>리액트</h1>
  //     </div>
  //   );
  // }

  // props 와 state
  render() {
    return(
      <LifeCycle />
    );
  }
}

export default App; //App Component를 내보낼 때 export를 사용.
