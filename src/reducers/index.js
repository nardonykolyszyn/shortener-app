import {
  REQUEST_URLS, RECEIVE_URLS,
  CREATE_URL_REQUEST, CREATE_URL_RECEIVE
} from '../actions';

export default (state = {
  isFetching: false,
  didInvalidate: false,
  urls: [],
  url: {}
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
    case CREATE_URL_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
      case CREATE_URL_RECEIVE:
        return {
          ...state,
          isFetching: false,
          didInvalidate: false,
          url: action.url
        };
    default:
      return state;
  }
};
