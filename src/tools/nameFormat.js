/* 姓名格式化 str：姓名， len：明文展示的位数，其他变为*（默认为1）， type：是否倒序隐藏（0：正序，1：倒序，默认为0）*/
export function nameFormat(str, len = 1, type = 0) {
  if (!str) {
    return '';
  }

  if (type === 0) {
    return str.substr(0, len) + new Array(str.length - len + 1).join('*');
  } else {
    return new Array(str.length - len + 1).join('*') + str.substr(str.length - len);
  }
}
