import api from '../lib/api';

// Shortened Urls
export const REQUEST_URLS = 'REQUEST_URLS';
export const RECEIVE_URLS = 'RECEIVE_URLS';
// /Posts/:id
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestUrls = () => ({
  type: REQUEST_URLS
});

export const receiveUrls = json => ({
  type: RECEIVE_URLS,
  urls: json.data.result || [],
  receivedAt: Date.now()
});

export const requestPost = () => ({
  type: REQUEST_POST
});

export const receivePost = json => ({
  type: RECEIVE_POST,
  posts: json.data[0],
  receivedAt: Date.now()
});

export const fetchUrls = () => (
  dispatch => api('https://shortener.devpolish.com/api/v1/shortened_urls')
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
