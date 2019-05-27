import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id : 0,
        name: '김진태',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  // 추가
  handleCreate = (data) =>{
    console.log('handleCreate');
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data}) //concat : push 와 같음.
    })
    console.log(data);
  }
  // 삭제
  handleRemove = (id) => { //id 를 파라미터로 받아옴.
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id) //filter : 특정 조건에 부합되는 원소들만 뽑아내서 새 배열을 만들어줌.
    })
  }
  // 수정
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information : information.map(
        info => id === info.id
        ? {...info, ...data} // 새 객체를 만들어서 기존의 값과 전달받음 data 을 덮어씀
        : info // 기존의 값을 그대로 유지
      )
    })
  }
  render() {
    const { information } = this.state;
    return(
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={ information }
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
