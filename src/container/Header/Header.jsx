import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import {Explore} from '../Explore';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>"Welcome to our restaurant's website, where you can explore our menu, book a table,
       and experience our passion for food and hospitality from the comfort of your own device."
     </p>
    { /* <button type="btn btn-success" onClick={()=> Explore.push('/Explore Menu')}> Explore Menu</button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
