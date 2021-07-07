// 函数类型注解的两种方式
// const fn1 = (str: string): number => {
//   return parseInt(str, 10);
// };

// 鼠标放在 fn1 上，TS 能推断出返回的类型，所以这里的返回值的类型注解可以省略
const fn1 = (str: string) => {
  return parseInt(str, 10);
};

// : 后面是类型注解
// = 后面是具体的实现
// 这种写法返回值的类型注解不能省略
const fn2: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

// 函数的入参一般需要手动注解，返回值可以不注解

// const date: Date = new Date();
// Date 类型的注解可以不写，TS 可以推断出来
const date = new Date();

// 其它的
const rawData = `{name: "shawn"}`;
// 鼠标放在 newData 上，提示类型为 any，所以需要给它注解
// const newData = JSON.parse(rawData);

interface Person {
  name: string;
}

const newData: Person = JSON.parse(rawData);

// 类似于 或 运算符
let temp: number | string = 123;

temp = '4456';
