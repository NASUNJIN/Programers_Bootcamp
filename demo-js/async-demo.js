// async-await : Promise 객체를 좀 더 쉽고 편하게 사용하는 문법
// 즉, 비동기 처리가 쉬움

// async 함수
// function f() {} : 일반 함수
// async function f() {} : async 함수

async function f() {
    return 7;  // Promise 객체를 반환 중
    // async 첫번째 기능
    // async 함수는 무조건 Promise 객체를 반환
    // 만약 반환값이 Promiserk 아니면, Promise.resolve()
};

f().then(
    function(result) {
        console.log("promise resolve : ", result);
    },function(error) {
        console.log("promise reject : ", error);
    }
);