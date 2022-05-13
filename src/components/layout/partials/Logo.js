import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <>
        <Link to="/">
          <Image
            src={require('./../../../assets/images/Tradebrary Logo Cropped.png')}
            alt="Open"
            width={250}
            height={250} />
        </Link>
      </>
    </div>
  );
}

export default Logo;