"use strict";

//동기 : 어떤 코드가 위에서부터 아래까지 흐름대로 자연스럽게 실행됨.

function syncFunction1() {
    console.log(1);
}

function syncFunction2() {
    console.log(2);
}

function syncFunction3() {
    console.log(3);
}

syncFunction1();
syncFunction2();
syncFunction3();

//비동기 : 서버에 요청을 주고 받을 때, 파일 입출력을 할 때 등 종종 쓰임

function asyncFunction1() {
    setTimeout(function() {
        console.log(1)
    }, 1000)
};

function asyncFunction2() {
    console.log(2);
};

function asyncFunction3() {
    console.log(3);
};

asyncFunction1();
asyncFunction2();
asyncFunction3(); 

// Async await
// 콜백지옥과 promise지옥을 해결하기위해 ES7에 등장하였다.
// await 키워드는 오직 async 로 정의된 함수의 내부에서만 사용.

const makeRequest = async () => {    
    try{
        const data = JSON.parse(await getJSON());
        console.log(data);
    }catch(err) {
        console.log(err);
    }
}

makeRequest();

function fetchItems() {
    return new Promise(function(resolve, reject) {
      var items = [1,2,3];
      resolve(items)
    });
  }
  
  async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems); // [1,2,3]
  }