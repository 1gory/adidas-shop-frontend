const API_BASE_URL = 'https://erodionov-adidas-fake-api.now.sh/v1';

export const get = url => fetch(API_BASE_URL + url).then(response => response.json());

export const post = (url, data) =>
  fetch(API_BASE_URL + url, { method: 'POST', body: JSON.stringify(data) }).then(response =>
    response.json(),
  );

export const put = (url, data) =>
  fetch(API_BASE_URL + url, { method: 'PUT', body: JSON.stringify(data) }).then(response =>
    response.json(),
  );

export const del = url =>
  fetch(API_BASE_URL + url, { method: 'DELETE' }).then(response => response.json());
