/**
 * 格式化时间差
 *
 * @param dateInput 时间输入，可以是 Date 对象或日期字符串
 * @param format 时间格式，默认为 'yyyy-MM-dd HH:mm:ss'
 * @returns 返回格式化后的时间差字符串
 * @throws 当输入参数不合法时，抛出错误
 */
export function timeAgoFormat(dateInput, format = 'yyyy-MM-dd HH:mm:ss') {
  // 确保输入是 Date 对象
  let date;
  if (dateInput instanceof Date) {
    date = dateInput;
  } else if (typeof dateInput === 'string') {
    date = new Date(dateInput);
  } else {
    throw new Error('Invalid input: must be a Date object or a date string.');
  }

  // 获取当前时间和输入时间的差距
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  // 计算时间差
  if (diffInSeconds < 60) {
    return '刚刚';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}分钟前`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}小时前`;
  } else if (diffInSeconds < 259200) {
    // 3天 = 259200秒
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}天前`;
  } else {
    // 自定义格式化日期
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // 替换格式字符串中的日期和时间部分
    return format
      .replace('yyyy', year)
      .replace('MM', month)
      .replace('dd', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }
}
