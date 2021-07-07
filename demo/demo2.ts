interface Point {
  x: number;
  y: number;
}
// 静态类型
// 1. 基础类型 （数字，布尔，字符串）
// boolean,number,string,void,undefined,symbol,null
const num: number = 123;
const type: string = '123';
// 2. 对象类型 （对象，数组，函数，类)
// {},function,Class,[]
const man: {
  name: string;
  age: number;
} = {
  name: 'shawn',
  age: 18,
};
const getTotal: () => number = () => {
  return 123;
};
function demo2(data: Point) {
  console.log('12e');
  return data.x * data.y;
}

demo2({ x: 2, y: 4 });
