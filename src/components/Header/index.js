import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
const Header = ({ fields }) => (
  <div>
    <div className="header">
      <div className="headerimg">
        <Image field={fields.headerimg} />
      </div>
      <div className="headernav">
        <nav>
          <a href={`${fields.buttonurl.value}`}>WATCHES</a>
          <a href="">OUR WORLD</a>
          <a href="">BOUTIQUES</a>
        </nav>
      </div>
      {/* <div className="headerSearch">
        <span className="wishlist">
          <i className="fa fa-heart" />
        </span>
        <span className="searchwrapper">
          <i className="fa fa-search" />
        </span>
      </div> */}
    </div>
  </div>
);

export default Header;
