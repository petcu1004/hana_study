function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}
console.log(new Food("cheese", 5).name);
console.log(new Food("cheese", 5).price);
console.log(new Food("cheese", 5).category);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

console.log(new Toy("자동차", 10));

function multiply(x, y, z) {
  return `${this.name} - ${x * y * z}`;
}

const heeName = {
  name: "정현희",
};
console.log(multiply.call(heeName, 3, 4, 5)); //func.call(this값, 인수1, 인수2, 인수3, ...);
console.log(multiply.call(heeNmae, [3, 4, 5])); //func.apply(this값, 배열);

const result = multiply.bind(heeName, 3, 4, 5); //메소드가 호출되면 새로운 함수로 생성된다.
console.log(result);
console.log(result());

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetx = module.getX;
console.log(unboundGetx());

const boundGetx = unboundGetx.bind(module);
console.log(boundGetx());
