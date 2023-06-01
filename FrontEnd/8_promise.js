const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("성공");
  }, 2000);
});

myPromise.then((s) => {
  console.log("와!!" + s);
});

const getPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject("로그인 실패");
  }, 2000);
});

getPromise
  .then((sm) => {
    console.log("와" + sm);
  })
  .catch((res) => {
    console.log("ㅠㅠㅠ" + res);
  })
  .finally(() => {
    console.log("성공 실패 상관없이 수행되어야 하는 곳 -> 자원반납을 작성함");
  });
