import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./UrlForm.css'); // eslint-disable-line global-require
}


export default class UrlForm extends React.Component {
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

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.url}`);
    event.preventDefault();
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

