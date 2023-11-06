## any-format 介绍

用于前端常见的数据格式化，如手机号脱敏，金额格式化展示，字符串去除空白字符等

### 安装

##### 浏览器环境

[下载链接](https://github.com/Jywud/any-format/tree/master/dist/anyFormat.min.js) 拷贝压缩好的代码到本地的 js 文件引入

```shell
<script src="anyFormat.js"></script>
```

##### 使用 npm

```shell
npm install any-format --save
```

##### 使用 yarn

```shell
yarn add any-format
```

##### 使用 pnpm

```shell
pnpm add any-format
```

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

#### desensitizationFormat - 通用脱敏

```javascript
desensitizationFormat(param1, param2, param3);
```

`入参：param1(string)：原字符串  param2(number)：起始保留长度 param3(number)：结束保留长度，到String.length`

例子

```javascript
import { desensitizationFormat } from 'any-format';

desensitizationFormat('浙江省杭州市', 2, 1); //浙江***市
desensitizationFormat('浙江省杭州市', 2, 0); //浙江****
desensitizationFormat('浙江省杭州市', 0, 2); //****州市
```

#### phoneFormat- 手机号脱敏

```javascript
phoneFormat(param1);
```

`入参：param1(string)：手机号字符串`

例子

```javascript
import { phoneFormat } from 'any-format';

phoneFormat('17611112222'); //176****2222
```

#### emailFormat - 邮箱脱敏

```javascript
emailFormat(param1);
```

`入参：param1(string)：邮箱字符串`

例子

```javascript
import { emailFormat } from 'any-format';

emailFormat('1234abcdefg@163.com'); //123****@163.com
```

#### identityFormat - 身份证号码脱敏

```javascript
identityFormat(param1);
```

`入参：param1(string)：身份证号字符串`

例子

```javascript
import { identityFormat } from 'any-format';

identityFormat('330921199110253510'); //330***********3510
```

#### nameFormat - 姓名脱敏

```javascript
nameFormat(param1, param2, param3);
```

`入参：param1(string)：姓名字符串 param2(number)：明文展示的长度，其他变为*（默认为1）param3(number)：是否倒序隐藏（0：正序，1：倒序，默认为0）`

例子

```javascript
import { nameFormat } from 'any-format'

nameFormat('王爱红') //王**
nameFormat('王爱红'， 1) //王**
nameFormat('王爱红'， 2) //王爱*
nameFormat('王爱红'， 1， 1) //**红
nameFormat('王爱红'， 2， 1) //*爱红
```

#### bankCardFormat - 银行卡号脱敏

```javascript
bankCardFormat(param1);
```

`入参：param1(string)：银行卡号字符串`

例子

```javascript
import { bankCardFormat } from 'any-format';

bankCardFormat('6212268202014638888'); //'6212 **** **** 8888'
```

#### moneyFormat - 金额格式化

```javascript
moneyFormat(param1, param2);
```

`入参：param1(string | number)：金额字符串或者数字 param2(string)：分隔符号（默认为,）`

例子

```javascript
import { moneyFormat } from 'any-format';

moneyFormat(12000); //12,000.00
moneyFormat(12000, '~'); //12~000.00
```

#### numberFormat - 数字格式化

```javascript
numberFormat(param1, param2);
```

`入参：param1(string | number)：原数据 param2(string)：分隔符号（默认为,）`

例子

```javascript
import { numberFormat } from 'any-format';

numberFormat(10000); //10,000
numberFormat(10000, '-'); //10-000
```

#### bigNumberTransform - 大额数字格式化

```javascript
bigNumberTransform(param1);
```

`入参：param1(string | number)：大额数据`

例子

```javascript
// 入参：数字值
import { bigNumberTransform } from 'any-format';

bigNumberTransform(100); //100
bigNumberTransform(1000); //1千
bigNumberTransform(10000); //1万
bigNumberTransform(10000000); //1千万
bigNumberTransform(100000000); //1亿
```

#### dateFormat - 日期格式化

```javascript
dateFormat(param1, param2);
```

`入参：param1(string | date)：日期字符串或者日期对象 param2(string)：格式化字符串（默认yyyy-MM-dd）`

例子

```javascript
import { dateFormat } from 'any-format';

dateFormat(new Date()); //2023-01-03
dateFormat(new Date(), 'yyyy/MM/dd'); //2023/01/03
dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'); //2023-01-03 12:12:12
```

#### toCamelFormat - 字符串转驼峰格式

```javascript
toCamelFormat(param1, param2);
```

`入参：param1(string)：非驼峰字符串 param2(string)：非驼峰字符串间隔符`

例子

```javascript
import { toCamelFormat } from 'any-format';

toCamelFormat('aa_bb_cc'); //aaBbCc
toCamelFormat('aa-bb-cc', '-'); //aaBbCc
```

#### stripFormat - 去空白字符

```javascript
stripFormat(param1, param2);
```

`入参：param1(string)：原字符串 param2(string)：默认不传或者传all去除所有空格，trim：去首尾空格，head：去头部空格，tail：去尾部空格`

例子

```javascript
import { stripFormat } from 'any-format';

stripFormat('  abc df '); //'abcdf'
stripFormat('  abc df ', 'trim'); //'abc df'
stripFormat('  abc df ', 'head'); //'abc df '
stripFormat('  abc df ', 'tail'); //'  abc df'
```

#### truncateFormat - 字符串截断

```javascript
truncateFormat(param1, param2， param3);
```

`入参：param1(string)：原字符串 param2(number)：截断的长度(默认为10) param3(string)：截断后拼接的后缀(默认是...)`

例子

```javascript
import { truncateFormat } from 'any-format';

truncateFormat('abcdefghigklmn', 6); //'abcdef...'
truncateFormat('abcdefghigklmn', 100); //'abcdefghigklmn'
truncateFormat('abcdefghigklmn', 6, '等等'); //'abcdef等等'
```

#### toUpperCaseFormat - 字符串转大写

```javascript
toUpperCaseFormat(param1);
```

`入参：param1(string)：原字符串`

例子

```javascript
import { toUpperCaseFormat } from 'any-format';

toUpperCaseFormat('world'); //'WORLD'
```

#### toLowerCaseFormat - 字符串转小写

```javascript
toLowerCaseFormat(param1);
```

`入参：param1(string)：原字符串`

例子

```javascript
import { toLowerCaseFormat } from 'any-format';

toLowerCaseFormat('WORLD'); //'world'
```

#### toLowerLineFormat - 驼峰格式转下划线

```javascript
toLowerLineFormat(param1);
```

`入参：param1(string)：原字符串`

例子

```javascript
import { toLowerLineFormat } from 'any-format';

toLowerLineFormat('isBetter'); //'is_better'
toLowerLineFormat('IsBetter'); //'is_better'
```

#### noDataFormat - 空数据格式化

```javascript
noDataFormat(param1, param2);
```

`入参：param1(string)：原字符串 param2(string)：替换字符串（默认''）`

例子

```javascript
import { noDataFormat } from 'any-format';

noDataFormat(null); // '';
noDataFormat('null'); // '';
noDataFormat(undefined); // '';
noDataFormat('undefined'); // '';
noDataFormat(undefined, '-'); // '-';
noDataFormat('abc'); // 'abc';
```

#### urlParmasFormat - 获取 url 的参数转为对象

```javascript
urlParmasFormat(param);
```

`入参：param(string)：字符串（默认window.location.search.slice(1)）`

例子

```javascript
import { urlParmasFormat } from 'any-format';

urlParmasFormat(); // 当前url的参数转为对象;
urlParmasFormat('a=1&b=2'); // {a: '1', b: '2'}
```

#### compareVersion - 版本号比较

```javascript
compareVersion(v1, v2);
```

`入参：v1(string)：2.0.0  v2(string)：2.1.0`

例子

```javascript
import { compareVersion } from 'any-format';

compareVersion('2.0.0', '2.0.0'); // 0
compareVersion('2.0.0', '2.0'); // 0
compareVersion('2.1.0', '2.0.0'); // 1
compareVersion('2.0.1', '2.0.0'); // 1
compareVersion('2.1.0', '3.0.0'); // -1
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
