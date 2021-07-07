// 1. 类型注解 type annotation
// 告诉 TS 变量是什么类型
let age: number = 23;

// 2. 类型推断
let maxVal = 234;
// 没有注解变量类型，鼠标放上去，TS 会自动尝试分析变量类型
// 如果能分析，可以不用管
// 如果 TS 不能分析，就需要使用类型注解
const len = 23;

// 尽量让变量都有类型，如果 TS 可以推断变量类型，可以省去类型注解

let list: Array<object> = [
  { age: 1, type: '123' },
  { age: 2, type: '456' },
  { age: 3, type: '789' },
];
