//section5
//Q1 変数
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let first = languages[0];
let second = languages[3];

console.log(`私の好きな言語は${first}です。次は${second}を勉強してみたいです。`);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4 配列 × オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;

console.log(averageAge);

//Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
};
sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello！');
};

console.log(user.birthday);
user.sayHello();

//Q8 引数
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};
calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.subtract(20, 10);

calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
};
calc.divide(25, 5);

//Q9 返り値
function remainder(x, y) {
  return x % y;
}

let x = 5;
let y = 3;
let result = x % y;

console.log(x + ' を ' + y + ' で割った余りは ' + result + ' です。');

//Q10 スコープ
function foo() {
  let x = 1;
}

// console.log(x); がエラーになる理由
// x は foo の中で定義されているので、外から参照できないスコープの外にあるため
// → 「スコープ」「参照」
//console.log(x); ReferenceError: x is not defined

//section6
//Q1 標準組み込みオブジェクト
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//Q2 コールバック関数
setTimeout(function() {
  console.log('Hello World!');
}, 3000);

//Q3 if
let num = 5;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

//Q4 for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let item = mixed[i];

  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}
