import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Packages from '../components/sections/Packages';
import Testimonial from '../components/sections/Testimonial';
import '../assets/scss/style.scss';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Packages/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" id="faq"/>
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
}

export default Home;