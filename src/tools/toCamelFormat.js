/**
 *
 * @param {str} 非驼峰字符串
 * @param {re} 间隔符
 * @returns 驼峰字符串
 */
export function toCamelFormat(str, re = '_') {
  if (!str) {
    console.error('toCamel参数错误');
    return;
  }

  let arr = str.split(re);

  return arr
    .map((v, i) => {
      if (i == 0) return v;
      return v[0].toUpperCase() + v.slice(1);
    })
    .join('');
}
