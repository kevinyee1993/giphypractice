import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from '../actions/simpleAction'


class SearchBar extends Component {
  render() {
    return(
      <div>
          <label htmlFor="gif-search">What GIFs u want?</label>
          <input type="text" name="gif-search"></input>
          <button onClick={ this.props.action }>Search</button>
        <div>Hello</div>
        <div>{ this.props.test.result }</div>
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
