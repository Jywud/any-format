/**
 *
 * @param {str} 字符串
 * @returns 小写字符串
 */
export function toLowerCaseFormat(str) {
  if (typeof str !== 'string') {
    console.error('toLowerCaseFormat参数错误， 入参为字符串');
    return;
  }

  return str.toLowerCase();
}
