// props

//import React, { Component } from 'react';

import React from 'react'; //함수형 컴포넌트 import 

// 기본 컴포넌트 형식
// class MyName extends Component {
//     render() {
//         return(
//             <div>
//                 안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
//             </div>
//         );
//     }
// }

// MyName.defaultProps = {
//     name: '기본이름'
// };

//  함수형 컴포넌트 형식
//  단순히 props 만 받아와서 보여주기만 하는 컴포넌트의 경우 사용.
const MyName =({ name }) => {
    return(
        <div>
            안녕하세요 ! 제 이름은 {name} 입니다.
        </div>
    )
}

export default MyName;