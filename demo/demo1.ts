interface Point {
  x: number;
  y: number;
}

const count: number = 2021;

// 看到静态类型：
// 1. 类型不能修改
// 2. 变量的属性和方法确定了
function demo1(data: Point) {
  console.log('12e');
  return data.x * data.y;
}

demo1({ x: 2, y: 4 });

// tsc 编译成 js 代码之后，会踢除 ts 相关的，也就是说，ts 相关的代码不会被编译到最终的 js 文件中
