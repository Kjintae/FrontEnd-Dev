"use strict";
while(true) {
    var number = Math.floor(Math.random() * 9) + 1;
    var number2 = Math.floor(Math.random() * 9) + 1;
    var result = number * number2;
    var flag = true;
    while(flag) {
        var answer = prompt(number + '*' + number2 + '=');
        if(result === Number(answer)) {
            alert('정답');
            flag = false;
        } else {
            alert('땡');
        }
    }
}

