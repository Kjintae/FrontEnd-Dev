import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone:''
    }
    handleChandge = (e) => {
        console.log('handleChandge');
        this.setState({
            [e.target.name] : e.target.value // [ ] -> Computed property names 문법
        })
    }
    handleSubmit = (e) => {
        console.log('handleSubmit');
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChandge}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChandge}
                    name="phone"
                />
                <button type="submit" onClick={this.handleSubmit}>등록</button>
            </form>
        )
    }
}

export default PhoneForm;