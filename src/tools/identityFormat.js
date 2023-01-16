/* 隐藏身份证号码中间位数 */
export function identityFormat(number) {
    number += '';
    return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
}