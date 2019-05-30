import React from 'react';
import './Form.css';
/* Form 컴포넌트에서 필요한 기능  
   1. 텍스트 내용 바뀌면 state 업데이트
   2. 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
   3. 인풋에서  Enter 누르면 버튼을 클릭한것과 동일한 작업 진행.
*/



//value: 인풋의 내용, onCreate: 버튼이 클릭 될 때 실행 될 함수,  
//onChange: 인풋 내용 변경 될 때 실행 될 함수, onKeyPress: 인풋에서 키를 입력 할 때 실행되는 함수
//           이 함수는 나중에 Enter 가 눌렀을 때 onCreate 를 한 것과 동일한 작업을 하기 위해서 사용
const Form = ({value, onChange, onCreate, onKeyPress}) => { 
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;