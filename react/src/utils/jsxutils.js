export const setCookie = (name, value, expiredays) => {
  const today = new Date();
  today.setMinutes(today.getMinutes() + expiredays);
  document.cookie = name + '=' + escape(value) + '; expires=' + today.toUTCString();
}

export const hasCookie = (cookieName, cookieValue) => {
  const isCookie = document.cookie.split(';').some((item) => item.includes(`${cookieName}=${cookieValue}`));
  return isCookie;
}