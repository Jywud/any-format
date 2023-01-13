### any-format介绍
用于格式化展示的工具库

###安装

```javascript
npm install any-format --save
```

###使用例子
```javascript
import { moneyFormat } from 'any-format'

moneyFormat(12000) //12,000.00
```

###支持的函数

#####金额格式化
```javascript
import { moneyFormat } from 'any-format'

moneyFormat(12000) //12,000.00
moneyFormat(12000, '~') //12~000.00
```

#####数字格式化
```javascript
import { numberFormat } from 'any-format'

numberFormat(10000) //10,000
numberFormat(10000, 'a') //10a000
```

#####手机号
```javascript
import { phoneFormat } from 'any-format'

phoneFormat('17611112222') //176****2222
```