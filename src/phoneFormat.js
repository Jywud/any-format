/* 隐藏手机号中间4位 */
export function phoneFormat() {
    return value.replace(/^(.{3})(.*)(.{4})/, "$1 $2 $3");
}