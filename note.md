### tsconfig.json

ts 编译的配置文件，但是要注意，只有直接运行 tsc 命令的时候，才会使用 tsconfig 的配置信息编译，而如果指定了文件，是不会使用 tsconfig 配置文件作为编译的配置项的

### compilerOptions: 

编译过程中的属性/配置项

+ removeComments: 去除注释

+ noImplicitAny: any也需要类型注解

+ strictNullChecks: 不强制校验 null 类型

+ incremental: 增量编译

+ allowJs: 允许编译 js 文件

+ checkJs: 检测 js 语法
