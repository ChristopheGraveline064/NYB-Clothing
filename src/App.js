import React, { Component } from 'react';

import {instagramAPI} from './Config/insta-config';

import './App.css';

import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Inspiration from './Inspiration/Inspiration.js'
import Product from './Product/Product.js'

import Header from './Header/Header.js';
import Tabs from './Tabs.js';
import Dropdown from './Dropdown.js'
import Lang from './Text/lang.json'
require('./Tab.css');

/*
  Link to instagram page:
  https://www.instagram.com/n.y.b.clothing/?hl=en

    //API request for #NYBclothing
    +https://api.instagram.com/v1/tags/NYBclothing/media/recent/?access_token=ACCESS_TOKEN
    TODO Try to get them ONLY is NYBclothing likes their picture
    +https://api.instagram.com/v1/users/self/media/liked?access_token=ACCESS-TOKEN

  Link to etsy page:
  https://www.etsy.com/ca/shop/NYBclothing

    //API request for etsy
    +https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key

*/
class App extends Component {

  constructor(props){
    super(props);
    var app_language = 'english'

    this.state ={
      language: app_language,
      lang: (typeof app_language == "string") ? Lang[app_language] : Lang['english'],
      clothingType: [
                      {id:'Dresses',display:true},
                      {id:'Coats & Jackets',display:true},
                      {id:'Pants',display:true},
                      {id:'Shirts',display:true},
                      {id:'Cloaks',display:true}
                    ],

    }

    instagramAPI.userSelf().then(function(result) {
      console.log(result.data); // user info
      console.log(result.limit); // api limit
      console.log(result.remaining) // api request remaining
    }, function(err){
      console.log(err); // error info
    });

  }

  onClickDropdownItem = (i) => {

    this.setState(state => {
      const clothingType = state.clothingType.map((item) => {
        if (item.id == i) {
          item.display = !item.display
          return item;
        } else {
          return item;
        }
      });
      return {
        clothingType,
      };
    });

  }


  render(){

    const {
      onClickDropdownItem,
      state: {
        language,
        lang,
        clothingType,
      }
    } = this;


    return (
      <div>

        <div>
          <Header/>
        </div>

        <div>
          <Tabs onClickDropdownItem={onClickDropdownItem}>
            <div dropdown={this.state.clothingType} label={lang.shop} onClickDropdownItem>
              {/*it might be a better idea to make dropdow a node instead of a prop*/}
              {/*<Dropdown type={"dropdown"}/>*/}
              <div align="right">{
                clothingType.map((clothes) => {
                  if (!clothes.display) return undefined;
                  return (<div onClick={() => this.onClickDropdownItem(clothes.id)} className='tag'>
                            {clothes.id}
                            <a className='closeBtn'>✕</a>
                          </div>);
                })
              }</div>
              <Product clothingType = {clothingType}/>
            </div>
            <div dropdown={[]} label={lang.sell}>
              {null}
            </div>
            <div dropdown={[]} label={lang.inspiration}>
              <Inspiration/>
            </div>
            <div dropdown={[]} label={lang.about_us}>
              <About/>
            </div>
            <div dropdown={[]} label={lang.contact_us}>
              <Contact/>
            </div>
          </Tabs>
        </div>

      </div>
    );
  }

}

export default App;
