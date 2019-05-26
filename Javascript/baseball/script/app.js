"use strict"

var list = [0,1,2,3,4,5,6,7,8,9]; // index = 0~9 까지있음.
var number = [];
for (var i = 0; i < 4; i++) {
  var select = Math.floor(Math.random() * list.length); //랜덤으로 뽑인 값 * 배열이 길이.
  console.log('select::'+select);
  console.log('list::', list, 'number::', number, 'length::', list.length);
  number[i] = list.splice(select, 1)[0];

var count = 0;
var strike = 0;
var ball = 0;
while (count < 10) {
  
  var input = prompt('숫자를 입력하세요'); 
  if(input == null) {
      input = prompt('종료되었습니다.')
  }
  var inputArray = input.split(''); 
  strike = 0; 
  ball = 0;
  count++; 
  for (var j = 0; j < 4; j++) {
    for (var k = 0; k < 4; k++) {
      if (number[j] == inputArray[k]) {
        if (j === k) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }
 
  if (strike === 4) {
    console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
    break;
  } else if (count >= 10) {
    console.error('시도 횟수를 초과하셨습니다.');
  } else {
    console.info(inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼');
  }
}
}