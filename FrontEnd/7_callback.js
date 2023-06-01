//비동기
//1)콜밷함수
//2)프라미스
//3)async/await

function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increase = n + 1;
    console.log(increase);
    if (callback) {
      callback(increase);
    }
  });
}

increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          increaseAndPrint(n, (n) => {
            increaseAndPrint(n, (n) => {
              console.log("끝");
            });
          });
        });
      });
    });
  });
});
