// 数组 和 元组
// ts 中的数组和 js 中的数组一样

const numArr: number[] = [1, 3, 5];

const arr: (number | string)[] = [1, 3, 'a'];

const undefinedArr: undefined[] = [undefined];

const objectArr: { name: string }[] = [{ name: 'adv' }];

const objectArr2: { name: string; age: number }[] = [{ name: 'adv', age: 10 }];

// 上面这种写法，看着比较繁琐，可以使用类型别名 type alias

type User = { name: string; age: number };

const userArr: User[] = [
  {
    name: 'shawn',
    age: 12,
  },
];

// 这种类的写法也是可以的
// class User {
//   name: string;
//   age: number;
// }
// const userArr: User[] = [
//   new User(),
//   {
//     name: 'shawn',
//     age: 12,
//   },
// ];

// 元组 tuple 可以简单理解为：一个数组长度固定，类型固定
const teacherInfo: [string, number, string] = ['shawn', 18, 'male'];
