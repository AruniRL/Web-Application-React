
import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Stipulation from "./Stipulation";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Contact Us",
    paragraph:
      "",
    paragraph2: "",
    paragraph3: ""
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {/* <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                    - must have $1M + revenue in 2020 - 2021
                    <br />
                    - pay rate - $ .10 per follower
                    <br />- no minimum follower requirement
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name">
                    Level III Trader
                  </span>
                  <span className="text-color-low"> </span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div> */}

            <div className="">
              <div className="formsec">
               
              <form action="https://formspree.io/f/mjvlgkvz" method="POST">
                <div>
              <input className="contact-name" type="text" name="name"  placeholder="Enter your name" required />
                </div>
                <div>
              <input className="contact-email" type="email" name="_replyto" placeholder="Enter your email" required />
                </div>
                <div>
                    <button  className="submit text-center" type="submit">Send</button>
                </div>
                </form>
              </div>
            </div>

            {/* <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                    - must have $100K + revenue in 2020 - 2021
                    <br />
                    - pay rate - $ .02 per follower
                    <br />- ex: 1000 followers = $20 per month
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name">Level I Trader</span>
                  <span className="text-color-low"></span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <Stipulation/> */}
     
    </section>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;

