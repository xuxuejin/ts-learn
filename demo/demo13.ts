// 枚举类型

const Status = {
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2
}

// function getResult(status: number) {
//     if(status == 0) {
//         return 'offline';
//     } else if(status == 1) {
//         return 'online';
//     } else if(status == 2) {
//         return 'deleted';
//     }
//     return 'error';
// }

// 上面这种写法不是很直观

// 下面这种写法就很清晰
function getResult(status: number) {
    if(status == Status.OFFLINE) {
        return 'offline';
    } else if(status == Status.ONLINE) {
        return 'online';
    } else if(status == Status.DELETED) {
        return 'deleted';
    }
    return 'error';
}

// console.log(getResult(Status.OFFLINE))



// ts 里边有枚举类型可以直接这么写
enum StatusType {
    OFFLINE,
    ONLINE = 4,
    DELETED // 5
}

// 默认从 0 开始

// 枚举类型可以设置初始值

function getResult2(status: number) {
    if(status == StatusType.OFFLINE) { 0
        return 'offline';
    } else if(status == StatusType.ONLINE) { 4
        return 'online';
    } else if(status == StatusType.DELETED) { 5
        return 'deleted';
    }
    return 'error';
}

console.log('StatusType.OFFLINE', StatusType.OFFLINE)
console.log('StatusType.ONLINE', StatusType.ONLINE)
console.log('StatusType.DELETED', StatusType.DELETED)

console.log('---- 0 ----', getResult2(0))
console.log('StatusType.DELETED', getResult2(StatusType.DELETED))

// 枚举类型还可以反查
console.log(StatusType[4]) // ONLINE