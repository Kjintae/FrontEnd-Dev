import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('앗!! 버그가 나타났다!!'));
    return (
        <div>

        </div>
    );
};

class LifeCycle extends Component {
    state = {
        number : 0,
        error : false
    }

    constructor(props) {
        super(props);
        console.log('1. constructor');
    }

    componentWillMount() {
        console.log('2. componentWillMount (deprecated) ');
    }

    componentDidMount() {
        console.log('3. componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음.
        console.log('4. shouldComponentUpdate');
        if (nextState.number % 5 === 0 ) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('5. componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('6. componentDidUpdate');
    }

    componentDidCatch(error, info) { //render 함수에서 에러가 발생한다면 ...
        this.setState({
            error: true
        });
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1
        });
    }

    render() {
        if (this.state.error) return (<h2>에러발생 !</h2>);
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default LifeCycle;