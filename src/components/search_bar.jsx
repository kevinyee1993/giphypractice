import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from '../actions/simpleAction'

import SearchForm from './search_form';


class SearchBar extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.formatValues = this.formatValues.bind(this);
  }

  // here call the action to get the data? using values as search term
  submit(values) {
    // console.log(values.search.toLowerCase().replace(" ", "+"));
    // console.log(this);
    let searchTerm = this.formatValues(values.search);
    // console.log(searchTerm);

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${ searchTerm }&api_key=r9SoboR1Oj9PtIgZZGuUZbrtqtH5qsl5&limit=5`)
    .then(response => console.log(response.data.data));
  }

  formatValues(values) {
    values = values.toLowerCase().replace(/ /g, "+");
    return values;
  }

  render() {
    return(
      <div>
        <SearchForm onSubmit={this.submit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return( {
    test: state.simpleReducer
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    action: simpleAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
