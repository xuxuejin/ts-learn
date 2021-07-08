// readonly
class Person5 {
    public readonly name: string;
    constructor(name: string) {
        this.name = name
    }
}

const person5 = new Person5('Shawn');
// 因为上面使用了 readonly 关键之，只能读，不能改
person5.name = 'hello';
console.log(person5.name)

// 抽象类
// 图形的类有很多通用的属性或方法
// 不管是 圆形 矩形 三角形 都有获取面积的方法

// 这是一个抽象类
abstract class Geom {
    // 因为每个图形的计算方法有区别
    // 给类的方法加了 abstract，表示这是方法是一个抽象方法，具体怎么实现不知道
    // 只能去定义一下这个方法，而没有具体的方法实现
    abstract getArea():number
    // 抽象类内部也可以写具体的实现
    width:number;
    getType() {
        return 'Gemo';
    }
}

// 抽象类只能被继承，不能直接被实例化
// new Geom 是错误的

// 子类如果继承了抽象类 里边有抽象方法，必须把抽象方法自己实现一下
class Circle extends Geom {
    // Circle 是 Geom 抽象类的具体实现类
    getArea() {
        return 123;
    }
}
class Square {

}
class Triangle {

}

// 接口高级用法

// 抽象类是把类相关的通用的属性和方法抽取出来
// 接口是把对象等其他类型通用的东西抽取出来
interface Teacher11{
    name: string
}

interface Student11 {
    name: string
}

const teacher11 = {
    name: 'shawn'
}
const student11 = {
    name: 'xiaoming',
    age: 16
}

const getUserInfo = (user: Teacher11 | Student11) => {
    console.log(user.name)
}

getUserInfo(teacher11)
getUserInfo(student11)

// 上面的写法，如果职业类型很多 (user: Teacher11 | Student11) 参数里的类型定义就会有很多
// interface 还可以进一步封装

interface Person12 {
    name:string;
}

// 接口也可以通过继承的方式，把通用的属性提取出来
interface Teacher12 extends Person12{
    // name: string
    teachingAge: number
}

interface Student12 extends Person12{
    // name: string
    age: number
}

const getInfo = (user: Person12) => {
    console.log(user.name)
}
