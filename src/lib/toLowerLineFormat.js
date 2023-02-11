/**
 * @description 驼峰转下划线格式
 * @param {str} 驼峰字符串
 * @returns 字符串
 */
export function toLowerLineFormat(str) {
  let temp = str.replace(/[A-Z]/g, function (match) {
    return '_' + match.toLowerCase();
  });
  if (temp.slice(0, 1) === '_') {
    //如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1);
  }
  return temp;
}
