const API_BASE_URL = 'https://erodionov-adidas-fake-api.now.sh/v1';

export default url => fetch(API_BASE_URL + url).then(response => response.json());
