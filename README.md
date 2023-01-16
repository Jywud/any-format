### any-format介绍
用于格式化展示的工具库
##持续更新中！！！（Continuously update code！！！）

### 安装

```javascript
npm install any-format --save
```

### 使用例子
```javascript
import { moneyFormat } from 'any-format'

moneyFormat(12000) //12,000.00
```

### 支持的函数

##### 金额格式化
```javascript
import { moneyFormat } from 'any-format'

moneyFormat(12000) //12,000.00
moneyFormat(12000, '~') //12~000.00
```

##### 数字格式化
```javascript
import { numberFormat } from 'any-format'

numberFormat(10000) //10,000
numberFormat(10000, 'a') //10a000
```

##### 手机号格式化
```javascript
import { phoneFormat } from 'any-format'

phoneFormat('17611112222') //176****2222
```

##### 邮箱格式化
```javascript
import { emailFormat } from 'any-format'

emailFormat('1234abcdefg@163.com') //123****@163.com
```

##### 身份证号码格式化
```javascript
import { identityFormat } from 'any-format'

identityFormat('330921199110253510') //330***********3510
```

##### 日期格式化
```javascript

import { dateFormat } from 'any-format'

dateFormat(new Date) //2023-01-03
dateFormat(new Date, 'yyyy/MM/dd') //2023/01/03
dateFormat(new Date, 'yyyy-MM-dd hh:mm:ss') //2023-01-03 12:12:12
```