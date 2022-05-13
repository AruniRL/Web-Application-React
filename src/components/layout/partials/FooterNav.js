import React from 'react';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        {/* <li>
          <Link to="#0">Contact</Link>
        </li> */}
        <li>
          <Link smooth to="#services">Services</Link>
        </li>
        <li>
          <Link smooth to="#packages">Packages</Link>
        </li>
        <li>
          <Link smooth to="#faq">FAQ</Link>
        </li>
        {/* <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
     
    </nav>
  );
}

export default FooterNav;