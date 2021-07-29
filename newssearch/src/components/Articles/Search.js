import React from 'react';
import PropTypes from 'prop-types';

const Search = () => (
  <>
      <label htmlFor="searchTerm">Search:</label>
      <input id="searchTerm" type="text" name="searchTerm" />
  </>
);

Search.propTypes = {};

export default Search;