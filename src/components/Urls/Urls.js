import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import UrlForm from '../UrlForm/UrlForm';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

if (process.env.WEBPACK) {
  require('./Urls.css'); // eslint-disable-line global-require
}


const Urls = props => (
  <div className="table-container">
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Unique Key</TableCell>
            <TableCell align="right">Visits</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Shortened Url</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.urls.map(url => (
            <TableRow key={url.id}>
              <TableCell component="th" scope="row">
                {url.id}
              </TableCell>
              <TableCell align="right">{url.attributes.counter}</TableCell>
              <TableCell align="right">{url.attributes.title}</TableCell>
              <TableCell align="right">
                <a href={url.attributes.shortened_url}>{url.attributes.shortened_url}</a></TableCell>

            </TableRow>
          ))}
        </TableBody>


      </Table>
    </TableContainer>
    
    <div>
      <UrlForm />
    </div>
  </div >
);

Urls.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Urls;
