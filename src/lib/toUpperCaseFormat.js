/**
 *
 * @param {str} 字符串
 * @returns 大写字符串
 */
export function toUpperCaseFormat(str) {
  if (typeof str !== 'string') {
    console.error('toUpperCaseFormat参数错误， 入参为字符串');
    return;
  }

  return str.toUpperCase();
}
