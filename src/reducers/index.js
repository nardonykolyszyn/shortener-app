import {
  REQUEST_URLS, RECEIVE_URLS
} from '../actions';

export default (state = {
  isFetching: false,
  didInvalidate: false,
  urls: []
}, action) => {
  switch (action.type) {
    case REQUEST_URLS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_URLS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        urls: action.urls,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};
