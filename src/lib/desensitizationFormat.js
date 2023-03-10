/**
 * 脱敏公用
 * @param str 脱敏字符串
 * @param begin 起始保留长度，从0开始
 * @param end 结束保留长度，到str.length结束
 * @returns {string}
 */
export function desensitizationFormat(str, begin = 0, end = 0) {
  if (!str) {
    return '';
  }
  if (begin + end >= str.length) {
    return '';
  }

  let leftStr = str.substring(0, begin);
  let rightStr = str.substring(str.length - end, str.length);

  let strCon = '';
  for (let i = 0; i < str.length - end - begin; i++) {
    strCon += '*';
  }
  return leftStr + strCon + rightStr;
}
