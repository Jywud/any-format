/* 空值格式化为特定字符串*/
export function noDataFormat(str, placeholder = '') {
  if (str === undefined || str === null || str === 'undefined' || str === 'null') {
    return placeholder;
  }

  return str;
}
