/**
 * 银行卡号脱敏
 * @param card 银行卡号
 * @returns {*}
 */

export function bankCardFormat(card) {
  if (!card) return;
  return card.replace(/^(.{4})(?:\d+)(.{4})$/, '$1 **** **** $2');
}
