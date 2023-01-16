"use strict";exports.dateFormat=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";"string"==typeof e&&e.indexOf("+")>-1&&e.indexOf("T")>-1&&(e=e.substr(0,10));var r=new Date(e);if(!r.getTime())return"";var n={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t},exports.emailFormat=function(e){return e?e.replace(/(\w{1,3})(.+)(@.+)/g,"$1****$3"):""},exports.identityFormat=function(e){return(e+="").replace(/(\d{3})\d*(\d{4})/g,"$1***********$2")},exports.moneyFormat=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";"string"==typeof e&&e.indexOf("E")>-1&&(e=((e.split("E")[0]-0)*Math.pow(10,e.split("E")[1]-0)).toString());for(var r=(e=parseFloat((e+"").replace(/[^\d\.-]/g,"")).toFixed(2)+"").split(".")[0].split("").reverse(),n=e.split(".")[1],o="",s=0;s<r.length;s++)o+=r[s]+((s+1)%3==0&&s+1!=r.length?t:"");return o.split("").reverse().join("")+"."+n},exports.numberFormat=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if(0===e)return 0;if(!e)return"-";e<0&&(e=Math.abs(e));for(var r=(e+"").split(".")[1],n=(e=parseInt((e+"").replace(/[^\d\.-]/g,""))+"").split("").reverse(),o="",s=0;s<n.length;s++)o+=n[s]+((s+1)%3==0&&s+1!=n.length?t:"");return r?o.split("").reverse().join("")+"."+r:o.split("").reverse().join("")},exports.phoneFormat=function(e){return e.replace(/^(.{3})(.*)(.{4})/,"$1 $2 $3")};
