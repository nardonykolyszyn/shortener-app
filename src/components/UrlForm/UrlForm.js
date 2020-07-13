import React, { useState } from 'react';
import { createNewUrl, fetchUrlsIfNeeded  } from '../../actions';
import { connect } from 'react-redux';


// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./UrlForm.css'); // eslint-disable-line global-require
}


export class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ url: e.target.value });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUrlsIfNeeded)
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    dispatch(createNewUrl(this.state.url))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="shorten-wrap">
        <input type="text" value={this.state.url} onChange={this.handleChange} placeholder="yourlink.com" className="url-input input" />
        <input type="submit" value="Shorten!" className="submit-button" />
      </form>
    );
  }
}

UrlForm.propTypes = {
};




export default connect(null)(UrlForm);
