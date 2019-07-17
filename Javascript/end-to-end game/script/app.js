"usee strict";

var word = '끝말잇기';
var answer = prompt(word);
    while(true) { 
        if(word[word.length - 1] === answer[0]) { // '끝말잇기' 길이의 요소에서 -1한것과 다음 글의 0번 째 요소를 비교.
            //맞았을 때
            alert('제대로 하고있군요. 다음 글을 입력해주세요.');
            word = answer;  
        } else {
            //틀렸을 때
            alert('다시 입력해주세요.');
        }
    }

    