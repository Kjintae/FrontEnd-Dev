import React,{ Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';


const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
class App extends Component {
  
  id = '3' // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input:'',
    todos: [
      { id: 0, text: '김진태', checked: false },
      { id: 1, text: '김동국', checked: true },
      { id: 2, text: '오태우', checked: false }
    ],
    color: '#343a40'
  }

  // 추가
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  // 글쓰기
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // input 비우고
      // concat 을 사용하여 배열에추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }

  //엔터
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  // v 체크
  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    console.log('handleToggle index::'+index);
    const selected = todos[index];
    console.log('handleToggle selected::'+selected.text);
    const nextTodos = [...todos]; //배열을 복사
    
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  // 삭제
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    });
  }

  render() {
    const { input, todos, color } = this.state;
    const { // 비구조화 할당 -> 이런식으로 코딩하면 this를 붙여줘야 하는 작업을 생략할 수 있다.
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return(
        <TodoListTemplate form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        )}
          palette = {(
            <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
          )}
        >
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
    );
  }
}

export default App;
