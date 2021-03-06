import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
//import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Stipulation = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Workflow that just works",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div> */}
                <h3 className="stipulation mt-0 mb-12">Stipulations</h3>
                  <ul className="stipul m-0 ">
                    <li>Only verified traders qualify as Pro Traders</li>
                    <li>Tradebrary verifies a traders' revenue via broker statements</li>
                    <li>Tradebrary verifies Trader ID using drivers license or state
                  ID</li>
                    <li>Payments are made by the 5th day of every month</li>
                    <li>Pro Traders must reach a balance of $100 or more to receive
                  a payout</li>
                    <li>All subscription fees and other charges are waived for Pro
                  Traders</li>
                    <li>All subscription fees and other charges are waived for Pro
                  Traders</li>
                  <li>Traders can use other reputable platforms to get verified</li>
                  <li>Tradebray accepts verification from select schools
                  (i.e Warrior Trader, etc)</li>
                  </ul>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Header.png")}
                //   src={require("./../../assets/images/features-split-image-01.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Stipulation.propTypes = propTypes;
Stipulation.defaultProps = Stipulation;

export default Stipulation;
