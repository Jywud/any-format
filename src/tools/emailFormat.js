/* 隐藏邮箱中间几位 */
export function emailFormat(str) {
  if (!str) {
    return '';
  }
  return str.replace(/(\w{1,3})(.+)(@.+)/g, '$1****$3');
}
