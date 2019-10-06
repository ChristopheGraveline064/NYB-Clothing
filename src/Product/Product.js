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

    return (
      <div>
        <div>
        {
          clothing_list.map((clothing) => {
            //for (var i = 0;i<clothingType.lenght;i++){
              if (clothing.cathegory ) {
                return (
                    <div>
                    <Clothing
                    /*placeholder arguments*/
                    imgSource={clothing.img}
                    buyLink={'https://www.etsy.com/ca/shop/NYBclothing'}
                    price={'10$'}
                    category={'t-shirt'}
                    />
                    </div>

                );
              } else {
                return undefined;
              }
            //}


          })
        }
        </div>

      </div>
    );
  }

}

export default Product;
