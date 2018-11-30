import React, { Component } from 'react';
import { connect } from 'react-redux';

class GifDisplay extends Component {
  render() {
    console.log(this.props.gifsList);
    if(this.props.gifsList.length === 0 ) {
      return(
        <div>
          Hello I am the gif display!
        </div>
      );
    }
    else {
      return(
        <div>
          <ul>
            {
              this.props.gifsList.map( (gif, index) => {
                return <li key={ index }>
                  <img src={ gif.images.original.url }></img>
                </li>
              } )
            }
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return({
    gifsList: state.gifsList
  })
}

export default connect(mapStateToProps)(GifDisplay);
