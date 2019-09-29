export const url = window.location.href;
export const baseUrl = `${window.location.protocol}//${window.location.host}`;
export const page = url.substring(baseUrl.length);
