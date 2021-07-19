// 命名空间引入文件如果很多，不是很直观，需要打开文件一个一个查看
// 可以使用 es6 import 和 export 语法

// components.ts
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

// page.ts
import {Header,  Content, Footer} from './components'

export default class Page {
    new Header();
    new Content();
    new Footer();
}