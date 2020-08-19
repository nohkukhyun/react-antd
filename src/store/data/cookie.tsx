export const setCookie = (name, value, exp, type = 'day' /** day, ms */) => {
  let date = new Date()
  const expires = type === 'day' ? exp * 24 * 60 * 60 * 1000 : exp
  date.setTime(date.getTime() + expires)
  document.cookie =
    name +
    '=' +
    value +
    ';expires=' +
    date.toUTCString() +
    ';domain=api.okaydoctor.co.kr' +
    ';path=/' +
    ';SameSite=None; Secure;'
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/'
}

export const getCookie = (name) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return value ? value[2] : null
}

export const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
