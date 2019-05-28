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


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
