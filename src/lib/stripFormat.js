/**
 * @export 去除字符串的空白字符
 * @param {*} str
 * @param {*} type 默认不传或者传all去除所有，trim：去首尾空格，head：去头部空格，tail：去尾部空格
 * @return {*}
 */
export function stripFormat(str, type = 'all') {
  if (typeof str !== 'string') return;

  if (type === 'all') {
    return str.replace(/\s*/g, '');
  } else if (type === 'trim') {
    return str.trim();
  } else if (type === 'head') {
    return str.replace(/^\s*/, '');
  } else if (type === 'tail') {
    return str.replace(/(\s*$)/g, '');
  }

  return new Error('type参数不合法');
}
