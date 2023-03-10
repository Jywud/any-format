### any-format 介绍

##### 用于前端常见的数据格式化，如手机号，金额，身份证号码等等

##### 持续更新中（Continuously update code）

### 代码贡献规范

##### 请查看 README_DEV.md 文件

### 安装

##### 使用 npm

```javascript
npm install any-format --save
```

##### 使用 yarn

```javascript
yarn add any-format
```

##### 浏览器 script 引入方式

[下载链接](https://github.com/Jywud/any-format/tree/master/dist/anyFormat.min.js)

### 使用例子

```javascript
// 局部导入
import { moneyFormat } from 'any-format';
moneyFormat(12000); //12,000.00

// 导入所有
import * as anyFormat from 'any-format';
anyFormat.moneyFormat(12000); //12,000.00
```

### 全部功能示例

##### 通用脱敏

```javascript
//第一位：脱敏字符串 第二位：起始保留长度，从0开始 第三位：结束保留长度，到str.length结束
import { desensitizationFormat } from 'any-format';

desensitizationFormat('浙江省杭州市', 2, 1); //浙江***市
desensitizationFormat('浙江省杭州市', 2, 0); //浙江****
desensitizationFormat('浙江省杭州市', 0, 2); //****州市
```

##### 手机号脱敏

```javascript
import { phoneFormat } from 'any-format';

phoneFormat('17611112222'); //176****2222
```

##### 邮箱脱敏

```javascript
import { emailFormat } from 'any-format';

emailFormat('1234abcdefg@163.com'); //123****@163.com
```

##### 身份证号码脱敏

```javascript
import { identityFormat } from 'any-format';

identityFormat('330921199110253510'); //330***********3510
```

##### 姓名脱敏格

```javascript

// 第一位：姓名， 第二位：明文展示的位数，其他变为*（默认为1）， 第三位：是否倒序隐藏（0：正序，1：倒序，默认为0）
import { nameFormat } from 'any-format'

nameFormat('王亚亚') //王**
nameFormat('王亚亚'， 1) //王**
nameFormat('王亚亚'， 2) //王亚*
nameFormat('王亚亚'， 1， 1) //**亚
nameFormat('王亚亚'， 2， 1) //*亚亚
```

##### 银行卡号脱敏

```javascript
import { bankCardFormat } from 'any-format';

bankCardFormat('6212268202014638888'); //'6212 **** **** 8888'
```

##### 金额格式化

```javascript
import { moneyFormat } from 'any-format';

moneyFormat(12000); //12,000.00
moneyFormat(12000, '~'); //12~000.00
```

##### 数字格式化

```javascript
import { numberFormat } from 'any-format';

numberFormat(10000); //10,000
numberFormat(10000, 'a'); //10a000
```

##### 日期格式化

```javascript
import { dateFormat } from 'any-format';

dateFormat(new Date()); //2023-01-03
dateFormat(new Date(), 'yyyy/MM/dd'); //2023/01/03
dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'); //2023-01-03 12:12:12
```

##### 转驼峰格式化

```javascript
// 第一位：非驼峰字符串 第二位：非驼峰字符串间隔符
import { toCamelFormat } from 'any-format';

toCamelFormat('aa_bb_cc'); //aaBbCc
toCamelFormat('aa-bb-cc', '-'); //aaBbCc
```

##### 去空白字符格式化

```javascript
//第一位：字符串  第二位：默认不传或者传all去除所有，trim：去首尾空格，head：去头部空格，tail：去尾部空格
import { stripFormat } from 'any-format';

stripFormat('  abc df '); //'abcdf'
stripFormat('  abc df ', 'trim'); //'abc df'
stripFormat('  abc df ', 'head'); //'abc df '
stripFormat('  abc df ', 'tail'); //'  abc df'
```

##### 字符串截断格式化

```javascript
//第一位：字符串  第二位：截断的长度(默认为10)，第三位：截断后拼接的后缀(默认是...)
import { truncateFormat } from 'any-format';

truncateFormat('abcdefghigklmn', 6); //'abcdef...'
truncateFormat('abcdefghigklmn', 100); //'abcdefghigklmn'
truncateFormat('abcdefghigklmn', 6, '等等'); //'abcdef等等'
```

##### 字符串转大写

```javascript
//入参：字符串
import { toUpperCaseFormat } from 'any-format';

toUpperCaseFormat('world'); //'WORLD'
```

##### 字符串转小写

```javascript
//入参：字符串
import { toLowerCaseFormat } from 'any-format';

toLowerCaseFormat('WORLD'); //'world'
```

##### 驼峰格式转下划线

```javascript
//入参：驼峰字符串
import { toLowerLineFormat } from 'any-format';

toLowerLineFormat('isBetter'); //'is_better'
toLowerLineFormat('IsBetter'); //'is_better'
```

### 贡献者

<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/Jywud">
            <img src="https://avatars.githubusercontent.com/u/18544133?v=4" width="100;" alt="Jywud"/>
            <br />
            <sub><b>大鱼</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/deek-dark">
            <img src="https://avatars.githubusercontent.com/u/55222006?v=4" width="100;" alt="deek-dark"/>
            <br />
            <sub><b>Deek-dark</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->
