import api from '../lib/api';

// Shortened Urls
export const REQUEST_URLS = 'REQUEST_URLS';
export const RECEIVE_URLS = 'RECEIVE_URLS';
export const SHORTENER_URL_REQUEST = 'SHORTENER_URL_REQUEST';
export const SHORTENER_URL_RECEIVE = 'SHORTENER_URL_RECEIVE';

export const requestUrls = () => ({
  type: REQUEST_URLS
});

export const receiveUrls = json => ({
  type: RECEIVE_URLS,
  urls: json.data.result || [],
  receivedAt: Date.now()
});

export const shortenerUrlRequest = () => ({
  type: REQUEST_URLS
});

export const shortenerUrlReceive = json => ({
  type: RECEIVE_URLS,
  urls: json.data || [],
  receivedAt: Date.now()
});

export const fetchUrls = () => (
  dispatch => api('https://api.devpolish.com/api/v1/shortened_urls')
    .then(
      json => dispatch(receiveUrls(json))
    )
);

const shouldFetchUrls = () => {
  const urls = false;
  if (!urls) {
    return true;
  }
  if (urls.isFetching) {
    return false;
  }
  return urls.didInvalidate;
};


export const fetchUrlsIfNeeded = () => (
  (dispatch, getState) => {
    if (shouldFetchUrls(getState())) {
      dispatch(fetchUrls());
    }
  }
);
