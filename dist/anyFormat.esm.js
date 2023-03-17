function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!e)return"";if(t+r>=e.length)return"";for(var n=e.substring(0,t),o=e.substring(e.length-r,e.length),i="",l=0;l<e.length-r-t;l++)i+="*";return n+i+o}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";"string"==typeof e&&e.indexOf("E")>-1&&(e=((e.split("E")[0]-0)*Math.pow(10,e.split("E")[1]-0)).toString());for(var r=(e=parseFloat((e+"").replace(/[^\d\.-]/g,"")).toFixed(2)+"").split(".")[0].split("").reverse(),n=e.split(".")[1],o="",i=0;i<r.length;i++)o+=r[i]+((i+1)%3==0&&i+1!=r.length?t:"");return o.split("").reverse().join("")+"."+n}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if(0===e)return 0;if(!e)return"-";e<0&&(e=Math.abs(e));for(var r=(e+"").split(".")[1],n=(e=parseInt((e+"").replace(/[^\d\.-]/g,""))+"").split("").reverse(),o="",i=0;i<n.length;i++)o+=n[i]+((i+1)%3==0&&i+1!=n.length?t:"");return r?o.split("").reverse().join("")+"."+r:o.split("").reverse().join("")}function n(e){return e.replace(/^(.{3})(.*)(.{4})/,"$1****$3")}function o(e){return(e+="").replace(/(\d{3})\d*(\d{4})/g,"$1***********$2")}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";"string"==typeof e&&e.indexOf("+")>-1&&e.indexOf("T")>-1&&(e=e.substr(0,10));var r=new Date(e);if(!r.getTime())return"";var n={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t}function l(e){return e?e.replace(/(\w{1,3})(.+)(@.+)/g,"$1****$3"):""}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e?0===r?e.substr(0,t)+new Array(e.length-t+1).join("*"):new Array(e.length-t+1).join("*")+e.substr(e.length-t):""}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";if(e){var r=e.split(t);return r.map((function(e,t){return 0==t?e:e[0].toUpperCase()+e.slice(1)})).join("")}console.error("toCamel参数错误")}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";if("string"==typeof e)return"all"===t?e.replace(/\s*/g,""):"trim"===t?e.trim():"head"===t?e.replace(/^\s*/,""):"tail"===t?e.replace(/(\s*$)/g,""):new Error("type参数不合法")}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e?e.length<=t?e:e.substr(0,t)+r:e}function p(e){if(e)return e.replace(/^(.{4})(?:\d+)(.{4})$/,"$1 **** **** $2")}function f(e){if("string"==typeof e)return e.toLowerCase();console.error("toLowerCaseFormat参数错误， 入参为字符串")}function c(e){if("string"==typeof e)return e.toUpperCase();console.error("toUpperCaseFormat参数错误， 入参为字符串")}function h(e){var t=e.replace(/[A-Z]/g,(function(e){return"_"+e.toLowerCase()}));return"_"===t.slice(0,1)&&(t=t.slice(1)),t}function v(e){for(var t=["","",""],r=1e3,n=3,o="",i=1;e/r>=1;)r*=10,n+=1;return n<=4?(t[0]=parseInt(e/1e3)+"",t[1]="千"):n<=8?(i="万"===(o=parseInt(n-4)/3>1?"千万":"万")?1e4:1e7,t[0]=e%i==0?parseInt(e/i)+"":parseFloat(e/i).toFixed(2)+"",t[1]=o):n<=16&&(o=(n-8)/3>1?"千亿":"亿",o=(n-8)/4>1?"万亿":o,i=1,"亿"===(o=(n-8)/7>1?"千万亿":o)?i=1e8:"千亿"===o?i=1e11:"万亿"===o?i=1e12:"千万亿"===o&&(i=1e15),t[0]=e%i==0?parseInt(e/i)+"":parseFloat(e/i).toFixed(2)+"",t[1]=o),e<1e3&&(t[0]=e+"",t[1]=""),t.join("")}export{p as bankCardFormat,v as bigNumberTransform,i as dateFormat,e as desensitizationFormat,l as emailFormat,o as identityFormat,t as moneyFormat,s as nameFormat,r as numberFormat,n as phoneFormat,g as stripFormat,a as toCamelFormat,f as toLowerCaseFormat,h as toLowerLineFormat,c as toUpperCaseFormat,u as truncateFormat};