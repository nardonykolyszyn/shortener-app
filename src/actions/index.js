import api from '../lib/api';
// GET /api/v1/shortened_urls
export const REQUEST_URLS = 'REQUEST_URLS';
export const RECEIVE_URLS = 'RECEIVE_URLS';

export const requestUrls = () => ({
  type: REQUEST_URLS
});

export const receiveUrls = json => ({
  type: RECEIVE_URLS,
  urls: json.result || [],
  receivedAt: Date.now()
});

export const fetchUrls = () => (
  dispatch => api('/api/v1/shortened_urls')
    .then(json => {
      dispatch(receiveUrls(json.data))
    })
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


// POST /api/v1/shortened_urls
export const CREATE_URL_REQUEST = 'CREATE_URL_REQUEST';
export const CREATE_URL_RECEIVE = 'CREATE_URL_RECEIVE';


export const createUrlRequest = () => ({
  type: REQUEST_URLS
});

export const createUrlReceive = json => ({
  type: RECEIVE_URLS,
  url: json.data.result || {}
});

export const createUrl = (url) => (
  dispatch => api.post('/api/v1/shortened_urls', {
    shortened_url: {
      url: url
    }
  })
  .then( res => {
    console.log('Create')
    console.log(res)
    json => dispatch(createUrlReceive(json))
  })

  .catch(err => {
    console.log(err)
  })
);

const shouldCreateUrl = () => {
  const url = false;
  
  if (!url) {
    return true;
  }
  
  if (url.isFetching) {
    return false;
  }
  return urls.didInvalidate;
};

export const createNewUrl = (url) => (
  (dispatch, getState) => {
    if (shouldCreateUrl(getState())) {
      dispatch(createUrl(url));
    }
  }
);
