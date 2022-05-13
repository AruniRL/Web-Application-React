import React from "react";
import Testimonial from './Testimonial';
import '../../assets/scss/style.scss';
import Stipulation from './Stipulation';
import Contact from "./Contact";
import FooterNote from "./FooterNote";



function ProTrades() {
  return (
    <>
      <Testimonial/>
      <Stipulation topDivider/>
      <Contact topDivider/>
      <FooterNote topDivider/>
    </>
  );
}

export default ProTrades;
