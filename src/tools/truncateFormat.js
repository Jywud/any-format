/* 截取字符串 */
export function truncateFormat(value, len = 10, suffix = '...') {
  if (!value) return value;

  if (value.length <= len) {
    return value;
  }

  return value.substr(0, len) + suffix;
}
