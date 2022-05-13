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

const Testimonial = ({
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
    title: "Pro Traders Program",
    paragraph:
      "Through its Pro Trader Sponsorship program, Tradebrary partners with more experienced, profitable traders to share their trades and trading experience with its community. We pay our Pro Traders for their trading skills and talent.",
    paragraph2: "Here are the qualifications and pay rates for Pro Traders",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
              <div className="">
                    <ul className="text-sm mb-0">
                      <li>must have $100K + revenue in 2020 - 2021</li>
                      <li>pay rate - $ .02 per follower</li>
                      <li>ex: 1000 followers = $20 per month</li>
                    </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name">Level I Trader</span>
                  <span className="text-color-low"> </span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                    <ul className="text-sm mb-0">
                      <li>must have $500K + revenue in 2020 - 2021</li>
                      <li>pay rate - $ .05 per follower</li>
                      <li>no minimum follower requirement</li>
                    </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name">Level II Trader</span>
                  <span className="text-color-low"></span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
              <div className="">
                    <ul className="text-sm mb-0">
                      <li>must have $1M + revenue in 2020 - 2021</li>
                      <li>pay rate - $ .10 per follower</li>
                      <li>no minimum follower requirement</li>
                    </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name">
                    Level III Trader
                  </span>
                  <span className="text-color-low"></span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Stipulation/> */}
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
