"usee strict";

var word = '끝말잇기';
var answer = prompt(word);
    while(true) { 
        if(word[word.length - 1] === answer[0]) {
            //맞았을 때
            alert('제대로 하고있군요. 다음 글을 입력해주세요.');
            word = answer;  
        } else {
            //틀렸을 때
            alert('다시 입력해주세요.');
        }
    }

    