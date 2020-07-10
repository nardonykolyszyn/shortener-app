import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUrlsIfNeeded } from '../../actions';
import Urls from '../Urls/Urls';
import Header from '../Header/Header';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./HomePage.css'); // eslint-disable-line global-require
}

export class HomePage extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    urls: PropTypes.arrayOf(PropTypes.object.isRequired)
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUrlsIfNeeded());
  }


  render() {
    const { urls, isFetching } = this.props;
    const isEmpty = urls.length === 0;
    return (
      <div className="HomePage">
        <Header />
        <h3 className="f-medium">Frequently Visited | Top 100</h3>


        {isEmpty
          ? (isFetching ? <h3>Loading...</h3> : <h4 className="HomePage-message">Not results</h4>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Urls urls={urls.data} />
          </div>
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { urls = [], isFetching = false, lastUpdated } = state;
  return {
    urls,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(HomePage);
