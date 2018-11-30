import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateGifsList } from '../actions/update_gif_list'

import SearchForm from './search_form';


class SearchBar extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.formatValues = this.formatValues.bind(this);
  }

  submit(values) {
    let searchTerm = this.formatValues(values.search);

    // calls gifs action which updates gifs reducer which updates gif show component
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${ searchTerm }&api_key=r9SoboR1Oj9PtIgZZGuUZbrtqtH5qsl5&limit=5`)
    // .then(response => this.setState({gifs: response.data.data}));
    .then(response => this.props.updateGifsList(response.data.data));
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
    test: state.simpleReducer,
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateGifsList
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// export default connect(mapStateToProps)(SearchBar);
