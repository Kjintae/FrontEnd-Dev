import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data; // 다음 받아올 data 가 현재 data 랑 다른 배열일 떄, true 로 설정
  }

  render() {
    console.log('render PhoneInfoList'); // App이 리렌더링됨에 따라 PhoneInfoList 도 리렌더링 되고있다. 지금은 Virtual DOMdpaks 리렌더링 합니다.
                                         // 지금의 상황에는 문제가 없지만 몇백개, 몇천개가 된다면 DOM에 렌더링 하는 자원은 아낄 수 있는게 좋다.
                                         // 이러한 낭비되는 자원을 아끼기 위해서 shouldComponentUpdate LifeCycle API을 사용하면된다.
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;