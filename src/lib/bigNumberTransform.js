/**
 * 大数字转换，将大额数字转换为万、千万、亿等
 * @param value 数字值
 */
export function bigNumberTransform(value) {
  const newValue = ['', '', ''];
  let fr = 1000;
  let num = 3;
  let unit = '';
  let fm = 1;
  while (value / fr >= 1) {
    fr *= 10;
    num += 1;
    // console.log('数字', value / fr, 'num:', num)
  }
  if (num <= 4) {
    // 千
    newValue[0] = parseInt(value / 1000) + '';
    newValue[1] = '千';
  } else if (num <= 8) {
    // 万
    unit = parseInt(num - 4) / 3 > 1 ? '千万' : '万';
    // tslint:disable-next-line:no-shadowed-variable
    fm = unit === '万' ? 10000 : 10000000;
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + '';
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(2) + '';
    }
    newValue[1] = unit;
  } else if (num <= 16) {
    // 亿
    unit = (num - 8) / 3 > 1 ? '千亿' : '亿';
    unit = (num - 8) / 4 > 1 ? '万亿' : unit;
    unit = (num - 8) / 7 > 1 ? '千万亿' : unit;
    fm = 1;
    if (unit === '亿') {
      fm = 100000000;
    } else if (unit === '千亿') {
      fm = 100000000000;
    } else if (unit === '万亿') {
      fm = 1000000000000;
    } else if (unit === '千万亿') {
      fm = 1000000000000000;
    }
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + '';
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(2) + '';
    }
    newValue[1] = unit;
  }
  if (value < 1000) {
    newValue[0] = value + '';
    newValue[1] = '';
  }
  return newValue.join('');
}
