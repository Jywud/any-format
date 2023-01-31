### any-format 开发约定

##### 用于前端常见的数据格式化

### 开发一个格式化函数的规范

- 在 src/lib 文件夹新建 XXXFormat.js 文件
- XXXFormat.js 文件中 export XXXFormat 函数
- 在 src/index.js 增加 export \* from "./lib/XXXFormat.js";
- 编写测试用例，在 test/index.test.js 增加你的测试用例，运行 npm run test 查看测试结果
- 在 README.md 写使用方法说明
