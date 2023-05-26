//반복문
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3));
//재귀함수
function pow1(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * powl(x, n - 1);
  }
}
console.log(pow1(2, 3));

//반복문
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(10));
alert(sumTo(10));

//재귀함수
function sumTo1(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo1(n - 1);
  }
}

//등차수열로 합공식 sumTo(n) = n*(n+1)/2 사용
function sumTo(n) {
  return (n * (n + 1)) / 2;
}
