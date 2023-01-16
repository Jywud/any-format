/* 隐藏手机号中间4位 */
export function phoneFormat(str) {
    return str.replace(/^(.{3})(.*)(.{4})/, "$1****$3");
}