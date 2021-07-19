// 如何写类型定义文件（类型描述文件）
// 下面是定义 jQuery 的 $ 

// 定义全局变量
// declare var $ : (param: () => void) => void;

// 定义全局函数（注意：定义函数有重载的机制，同名函数不会冲突）

// declare function $(param: () => void): void;

// declare function $(param: string): {
//     html: (html: string) => {};
// }

// 上面的方法可以优化成如下代码

interface JqueryInstance {
    html: (html: string) => JqueryInstance
}

// $(function(){})
// declare function $(readyFunc: () => void): void;

// $('body').html('<i>123</i>')
// declare function $(selector: string): JqueryInstance

// new $.fn.init()
// declare namespace $ {
//     namespace fn {
//         class init {}
//     }
// }

// 函数重载还可以借助 interface 实现

interface JQuery {
    (readyFunc: () => void): void;
    (selector: string): JqueryInstance;
}

declare var $: JQuery