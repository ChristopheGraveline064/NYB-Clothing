import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Clothing from './Clothing.js'
import EtsyProducts from './EtsyProducts.js'

class Product extends Component {
  static propTypes = {
    clothingType: PropTypes.instanceOf(Array),
  };

  constructor(props){
    super(props);
    var etsy = new EtsyProducts()
    this.state = {
      //placeholder values
      clothing_list: etsy.products
    };
  }


  render(){
    const {
      state: {
        clothing_list
      },
      props:{
        clothingType
      }

    } = this;

    let list_of_clothing_type_to_display = []
    for (var i =0 ;i < clothingType.length;i++){
      if (clothingType[i]['display']){
        list_of_clothing_type_to_display.push(clothingType[i]['id'])
      }
    }

    return (
      <div>
        <div>
        {
          clothing_list.map((clothing) =>{

              if (list_of_clothing_type_to_display.includes(clothing.cathegory)) {
                return (
                    <div key = {clothing.id.toString()}>
                      <Clothing key = {clothing.id.toString()}
                      imgSource={clothing.img}
                      buyLink={clothing.link}
                      price={clothing.price}
                      category={clothing.cathegory}
                      />
                    </div>

                );
              } else {
                return undefined;
              }
            })


          })
        </div>

      </div>
    );
  }

}

export default Product;
