//에러가 나면 에러 잡아주는 것
//try~catch ~finally

function runner() {
  try {
    console.log("정상처리");
    throw new Error("예외를 발생시킴");
    // console.log("예외발생한 후");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("정상처리와 에러 상관없이 반드시 수행해야 하는 것들");
  }
}

runner();
