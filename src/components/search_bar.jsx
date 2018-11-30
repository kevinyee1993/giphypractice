import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from '../actions/simpleAction'

import SearchForm from './search_form';


class SearchBar extends Component {
  // here call the action to get the data? using values as search term
  submit(values) {
    // console.log(values.search);
    axios.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=r9SoboR1Oj9PtIgZZGuUZbrtqtH5qsl5&limit=5')
    .then(response => console.log(response.data.data));
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
