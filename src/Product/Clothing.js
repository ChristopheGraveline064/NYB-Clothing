import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Clothing.css';

class Inspiration extends Component {

  static propTypes = {
    imgSource: PropTypes.string.isRequired,
    buyLink: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor(props){
    super(props);

  }


  render(){

    return (
      <div className = "clothing_block">
        <a href={this.props.buyLink} target="_blank">
          <img src={this.props.imgSource} alt={this.props.category}/>
        </a>
      </div>
    );
  }

}

export default Inspiration;
