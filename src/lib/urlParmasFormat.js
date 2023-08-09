/**
 * url query转为Object
 * @param query 请求的值query
 *
 */
export function urlParmasFormat(query = window.location.search.slice(1)) {
  query = query || (/\?[/\u4e00-\u9fa5_\-a-zA-Z0-9\.=&]+/.exec(location.href) || [''])[0].slice(1);

  if (typeof query !== 'string') throw new Error('getUrlParams参数错误');

  let param = {};

  query.split('&').forEach(query => {
    let [key, value] = query.split('=');
    param[key] = decodeURI(value);
  });

  return param;
}
