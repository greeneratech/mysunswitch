export const apiURL = (path) => `https://api.mysunswitch.com/api/${path}`;

export const apiHeaders = {
  auth(authToken = null) {
    return {
      Authorization: 'Bearer ' + (authToken === null ? window.sessionStorage.getItem('token') : authToken),
    };
  },
  
  contentTypeAndAuth(contentType = 'application/json', authToken = null) {
    return {
      ...this.auth(authToken),
      ContentType: contentType,
    }
  }
};
