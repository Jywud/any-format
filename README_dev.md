### any-format开发约定
##### 用于前端常见的数据格式化

### 开发一个格式化函数的规范

1. 在src/tools文件夹新建XXXFormat.js文件
2. XXXFormat.js文件中 export XXXFormat函数
3. 在src/index.js 增加 export * from "./tools/XXXFormat.js";
4. 编写测试用例，在test/index.spec.js 增加你的测试用例