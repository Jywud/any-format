### any-format 介绍

##### 用于前端常见的数据格式化，如手机号，金额，身份证号码等等

## 持续更新中！！！（Continuously update code！！！）

### 代码贡献规范

请查看 README_dev.md 文件

### 安装

```javascript
npm install any-format --save
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

### 支持的函数

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

##### 手机号格式化

```javascript
import { phoneFormat } from 'any-format';

phoneFormat('17611112222'); //176****2222
```

##### 邮箱格式化

```javascript
import { emailFormat } from 'any-format';

emailFormat('1234abcdefg@163.com'); //123****@163.com
```

##### 身份证号码格式化

```javascript
import { identityFormat } from 'any-format';

identityFormat('330921199110253510'); //330***********3510
```

##### 日期格式化

```javascript
import { dateFormat } from 'any-format';

dateFormat(new Date()); //2023-01-03
dateFormat(new Date(), 'yyyy/MM/dd'); //2023/01/03
dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'); //2023-01-03 12:12:12
```

##### 姓名格式化

```javascript

// 第一位：姓名， 第二位：明文展示的位数，其他变为*（默认为1）， 第三位：是否倒序隐藏（0：正序，1：倒序，默认为0）
import { nameFormat } from 'any-format'

nameFormat('王亚亚') //王**
nameFormat('王亚亚'， 1) //王**
nameFormat('王亚亚'， 2) //王亚*
nameFormat('王亚亚'， 1， 1) //**亚
nameFormat('王亚亚'， 2， 1) //*亚亚
```

#### 转驼峰格式化

```javascript
// 第一位：非驼峰字符串 第二位：非驼峰字符串间隔符
import { toCamelFormat } from 'any-format';

toCamelFormat('A_B_C'); //ABC
toCamelFormat('a_b_c'); //aBC
toCamelFormat('a-b-c', '-'); //aBC
```

#### 去空白字符格式化

```javascript
//第一位：字符串  第二位：默认不传或者传all去除所有，trim：去首尾空格，head：去头部空格，tail：去尾部空格
import { stripFormat } from 'any-format';

stripFormat('  abc df '); //'abcdf'
stripFormat('  abc df ', 'trim'); //'abc df'
stripFormat('  abc df ', 'head'); //'abc df '
stripFormat('  abc df ', 'tail'); //'  abc df'
```

#### 字符串截断格式化

```javascript
//第一位：字符串  第二位：截断的长度(默认为10)，第三位：截断后拼接的后缀(默认是...)
import { truncateFormat } from 'any-format';

truncateFormat('abcdefghigklmn', 6); //'abcdef...'
truncateFormat('abcdefghigklmn', 100); //'abcdefghigklmn'
truncateFormat('abcdefghigklmn', 6, '等等'); //'abcdef等等'
```

## 贡献者

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
