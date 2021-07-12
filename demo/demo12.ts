// 联合类型的类型保护

interface Bird {
    fly: boolean,
    sing: () => {}
}

interface Dog {
    fly: boolean,
    bark: () => {}
}
// 函数入参是个联合类型
function trainAnimal(animal: Bird | Dog) {
    // 输入 . 会提示共有的属性 fly，但是不会提示 sing 或 bark
    // 因为如果是 Bird，就没有 bark 方法，如果是 Dog 就没有 sing 方法
    // animal.
    // 因此，针对上面的情况，需要对类型进行保护
    // 类型保护的方法很多，有一种叫：类型断言
    if(animal.fly) {
        (animal as Bird).sing();
    }
    (animal as Dog).bark();
}

function trainAnimal2(animal: Bird | Dog) {
    // 这种叫：in 语法类型保护
    if('sing' in animal) {
        animal.sing();
    } else {
        animal.bark();
    }
}

function add(first: string | number, second: string | number) {
    // 如果是字符串就可能报错
    // 所以直接这样写也会报错
    // return first + second
    // 这种情况也需要类型保护
    // 这种叫：typeof 类型保护
    if(typeof first === 'string' || typeof second === 'string') {
        return `${first}+${second}`
    }
    return first + second
}

class NumberObj {
    count: number
    // constructor 不初始化会报错
    constructor() {
        this.count = 42;
    }
}


function addSecond(first: object | NumberObj, second: object | NumberObj) {
    // return first.count + second.count;
    // 这种叫：instanceof 语法类型保护
    // 这种再定义数据类型的时候要用 类，因为类才有 instanceof
    // interface 是不能用 instanceof 操作符调用
    if(first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}