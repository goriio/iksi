export function isUrl(url: string) {
  return /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/i.test(
    url
  );
}

export function isAlias(alias: string) {
  return /^[a-z0-9]+$/gi.test(alias);
}
