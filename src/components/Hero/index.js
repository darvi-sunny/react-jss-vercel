import React from 'react';
import { RichText, Image } from '@sitecore-jss/sitecore-jss-react';
function Hero({ fields }) {
  return (
    <div className="hero">
      <div className="heroImg">
        <Image field={fields.heroimg} />
      </div>
      {console.log(fields)}
      <React.Fragment>
        <RichText
          field={fields.herotext}
          tag="section"
          className="herotext"
          editable={false}
          data-sample="other-attributes-pass-through"
        />
      </React.Fragment>
      <div className="heroCTA">
        <button>FIND YOUR WATCH</button>
        <button>FIND A BOUTIQUE</button>
        <button>FIND YOUR STRAP</button>
      </div>
    </div>
  );
}

export default Hero;
