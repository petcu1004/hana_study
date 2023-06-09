function f() {
  let value = 123;
  return function () {
    console.log(value);
  };
}

let g = f(); //g.[[Environment]]에 f()호출 시 만들어진다.
f();
