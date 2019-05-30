"use strict"

const list = [0,1,2,3,4,5,6,7,8,9]; // index = 0~9 까지있음.
const number = [];

for (var i = 0; i < 4; i++) {
  let select = Math.floor(Math.random() * list.length); //랜덤으로 뽑인 값 * 배열이 길이.
  number[i] = list.splice(select, 1)[0]; //자동으로 뽑힌 숫자들
}

let count = 0;
while (count < 10) {
    let input = prompt('숫자를 입력하세요'); 
    let inputArray = '';
    let strike = 0; 
    let ball = 0;
    let flag = false;
    
    if(input == null){ //종료 누르면 종료.
      console.log('게임끝');
      break;
    }

    inputArray = input.split('')// 내가 입력한 숫자
    console.log(inputArray);
    count++;
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (number[j] == inputArray[k]) {
          (j === k) ? strike++ : ball++; break;
        } else if ( j !== k && inputArray[j] == inputArray[k]) {
          flag = true;
        }
      }

      if(flag){
        console.error('중복된 숫자가 있습니다.');
        break;
      }
    }
  
    if (strike === 4) {
      console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
      break;
    } else if (count >= 10) {
      console.error('시도 횟수를 초과하셨습니다.');
    } else {
      console.info(count+'번 째'+inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼');
      // .join(구분자: 배열의 항목들을 구분자를 기준으로 합친 새 문자열을 반환함.
    }
 }
