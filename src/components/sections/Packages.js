import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { FaVideo } from "react-icons/fa";
import { FiDatabase, FiShare2 } from "react-icons/fi";
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Packages = ({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Build up the whole picture",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };

  return (
    <section {...props} className={outerClasses} id="packages">
      <hr className="hrtag1" />
      <div className="container">
        <div className="services">
          <p>Packages</p>
        </div>
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item mb-16"></div>
                </div>
                <div className="card-container">
                  <div className="card1">
                    <div className="card-des">
                      <div className="card-title">
                        <h5 className="mt-0 mb-8">
                          Silver <Link className="apply">FREE</Link>
                        </h5>
                      </div>
                      <div className="card-text">
                       
                          <ul className="m-0 text-sm">
                            <li> Access to personal trades</li>
                            <li>Upload, view and store trades</li>
                            <li> View and respond to comments on personal trades</li>
                            <li> Access to Tradebrary’s Official recorded trades</li>
                          </ul>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item mb-16"></div>
                </div>
                <div className="card-container">
                  <div className="card1">
                    <div className="card-des1">
                      <div className="card-title">
                        <h5 className="mt-0 mb-8">
                          Gold <Link className="apply">$10/month</Link>
                        </h5>
                      </div>
                      <div className="card-text">
                      <ul className="m-0 text-sm">
                            <li> Access to all trades in Tradebrary</li>
                            <li>Upload, view and store trades</li>
                            <li> View and respond to comments on all trades</li>
                            <li>Send trades directly to other traders</li>
                            <li>Access to recorder & analytics</li>
                            <li>Access to 1 Pro Trader Class</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item mb-16"></div>
                </div>

                <div className="card-container">
                  <div className="card">
                    <div className="card-title">
                      <h5 className="mt-0 mb-8">
                        <Link to="/ProTrades" target="_blank"> Pro Trader{" "}
                        <span className="apply1"> Pro Traders Program</span> 
                        </Link>
                      </h5>
                    </div>
                    <div className="card-text">
                    <ul className="m-0 text-sm">
                            <li> Access to all trades in Tradebrary</li>
                            <li>Upload, view and store trades</li>
                            <li> View and respond to comments on all trades</li>
                            <li>Send trades directly to other traders</li>
                            <li>Access to recorder/analytics</li>
                            <li>Pro Traders can store their trades and other trades in Tradebrary for training purposes</li>
                            <li>Stream trading sessions and live classes</li>
                            <li>Import and store screenshots and other forms content for training purposes</li>
                            <li> Waived subscription fees</li>
                            <li>Paid for the number of students that join their class</li>
                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr/> */}
    </section>
  );
};

Packages.propTypes = propTypes;
Packages.defaultProps = defaultProps;

export default Packages;
