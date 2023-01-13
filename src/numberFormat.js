/* 数字格式化 */
export function numberFormat(str, dot = ",") {
  if (str === 0) return 0;
  if (!str) return "-";
  if (str < 0) str = Math.abs(str);
  let f = (str + "").split(".")[1];
  str = parseInt((str + "").replace(/[^\d\.-]/g, "")) + "";
  let l = str.split("").reverse();
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? dot : "");
  }
  if (f) {
    return t.split("").reverse().join("") + "." + f;
  } else {
    return t.split("").reverse().join("");
  }
}
