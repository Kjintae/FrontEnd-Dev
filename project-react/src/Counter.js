// state
// 동적인 데이터를 다룰 때 사용.

import React, { Component } from 'react';

class Counter extends Component {
    //class fields 문법
    state = {
        number: 0,
        foo: {
            bar : 0,
            foober : 1
        }
    }
    

    // class fields 문법을 사용하지 않을 때
    // constructor(props) {
    //     super(props); // 컴포넌트를 만들게 되면서, Component를 상속했으며, constructor 를 작성하게 되면 기존의 클래스 생성자를 덮음.
    //                   // 리액트 컴포넌트가 지니고 있던 생성자를  super를 통하여 미리 실행하고, 그 다음에 우리가 할 작업을 설정
    //     this.state = {
    //         number : 0
    //     }
    // };

    hadnIncrease = () => {
        const { number } = this.state
        this.setState({ // state 에 있는 값을 바꾸기 위해서는 , this.setState를 무조건 거쳐야 함. 이 함수가 호출되면 컴포넌트가 리렌더링 되도록 설계
             number: number + 1
        })
    }

    hadnDecrease = () => {
        this.setState(
              // 비구조화 할당 문법
            ({ number }) => ({
                number: number - 1
            })
        )
    }

    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.hadnIncrease}>+</button>
                <button onClick={this.hadnDecrease}>-</button>
                {/* 이벤트 함수 사용할 때 주의사항 
                    1. 이벤트 이름을 설정할 때 camelCase 로 설정해줘야한다. ex) onClick, onChange
                    2. 이벤트에 전달해주는 값은 함수여야 한다. 메소드 호출 x! 
                */}
                
            </div>
        );
    }
}

export default Counter;