// 泛型 generic 泛指的类型（不确定），在调用方法的时候在具体的指定类型

function join(first: string | number, second: string | number) {
    return `${first}${second}`
}
join('1', 2)

// 比如上面的函数，第一参数是 数字，那就要求第二个也要是 数字
// 第一个是字符串，第二个也要是字符串
function join2<ABC>(first: ABC, second: ABC) {
    return `${first}${second}`
}
// 上面的表示：这个函数接受一个泛型 ABC，不知道具体是什么类型
// first 是 ABC，second 也是 ABC
// 在调用的时候需要指定

// 错误
// join2<string>(1, 2)
// 正确
join2<number>(1, 2)
join2<string>('234', '567')

// 这种形式的类型定义，还要看后面参数的类型
function map<ABC>(params: ABC[]) {
    return params
}

// 调用的时候，指定了参数类型为字符串
// 但必须是字符串数组的形式
// 错误
map<string>('123')
// 正确
map<string>(['123', '456'])

// 等价于上面的写法
// function map<ABC>(params: Array<ABC>) {
//     return params
// }

// 一般的用 T （Type）来作为泛型的名字
function join3<T>(first: T, second: T) {
    return `${first}${second}`
}

// 泛型里边还可以写多个
function join4<T, P>(first: T, second: P) {
    return `${first}${second}`
}

join4<number, string>(1, '2')

// 如果没有指定具体泛型的类型，ts 会自己推断，鼠标放上去就可以显示出 ts 的类型推断了
join4(8, '10')

// 另外，还可以指定函数返回值为 泛型
function join5<T, P>(first: T, second: P): T {
    // 报错，因为要求返回的泛型是 T，second 是 P
    // return second

    // 正确
    return first
}

