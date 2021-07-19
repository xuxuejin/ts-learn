// 命名空间
namespace Home {
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'this is Header';
            document.body.appendChild(elem);
        }
    }

    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'this is Content';
            document.body.appendChild(elem);
        }
    }

    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'this is Header';
            document.body.appendChild(elem);
        }
    }

    export class Page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
}

// 使用了命名空间。避免了暴露不必要的全局变量
// 通过 export 暴露需要暴露的变量
// 调用的地方 new Page() 需要改成 new Home.Page()
// 原来暴露了4个变量现在通过命名空间只暴露出去一个变量



// 实际开发中会把组件相关的提取出来
// 为了把 组件 和 调用 打包到同一个 js 文件中，避免页面引入两个 js 文件
// 可以在 tsconfig 里边配置 "outFile": "./" 把 ts 编译的文件打包到同一文件

// components.ts
namespace Components {
    export class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'this is Header';
            document.body.appendChild(elem);
        }
    }

    export class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'this is Content';
            document.body.appendChild(elem);
        }
    }

    export class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'this is Header';
            document.body.appendChild(elem);
        }
    }
}

// page.ts 文件
/// <reference path='./componennts.ts' />
// 上面的依赖声明的写法，表示是依赖于 componennts 文件
namespace Main {
    export class NewPage {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }

    // 命名空间里还可以嵌套子命名空间或其他
    export namespace SubMain {
        export class Test {}
    }
}
