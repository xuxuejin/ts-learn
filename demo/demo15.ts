// 在类中使用泛型

class DataManager {
    constructor(private data: string[]) {}
    getItem(index:number): string {
        return this.data[index]
    }
}

const data = new DataManager(['1'])

data.getItem(0)

// 如果接受其他的类型 那么就要写更多的联合类型
// class DataManager {
//     constructor(private data: string[] ｜ number[]) {}
//     getItem(index:number): string | number {
//         return this.data[index]
//     }
// }
// 这时候就可以用联合类型来解决此类问题：
class DataManager2<T> {
    constructor(private data: T[]) {}
    getItem(index:number): T {
        return this.data[index]
    }
}

const data2 = new DataManager2<string>(['1'])
const data3 = new DataManager2<number>([1])

data2.getItem(0)


// 除此之外 还可以让泛型继承接口
interface Item {
    name: string;
}
class DataManager3<T extends Item> {
    constructor(private data: T[]) {}
    getItem(index:number): string {
        return this.data[index].name
    }
}

const data4 = new DataManager3([{name: '123'}])

// 泛型很灵活 还可以限制传参类型
interface Test {
    name: string
}
class DataManager4<T extends number | string> {
    constructor(private data: T[]) {}
    getItem(index:number): T {
        return this.data[index]
    }
}

// 报错
// const data5 = new DataManager4<Test>([])
const data6 = new DataManager4<number>([])
const data7 = new DataManager4<string>([])

// 函数中也可以使用泛型作为类型注解
const func:<T>() => string = <T>() => {
    return '123'
}

function hello<T>(params: T) {
    return params
}