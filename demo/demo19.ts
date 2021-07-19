// es6 模块化描述文件

// import $ from 'jquery'
declare module 'jquery' {
    interface JqueryInstance {
        html: (html: string) => JqueryInstance
    }

    function $(readyFunc: () => void): void;

    function $(selector: string): JqueryInstance

    // 模块化最后一定要导出
    export = $;
}