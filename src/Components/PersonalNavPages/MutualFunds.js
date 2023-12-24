import React, { useState } from "react";
import PersonalBankNav from "../PersonalBankNav";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./MutualFund.css";

const MutualFunds = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  return (
    <>
      <PersonalBankNav />
      {/* <h2 className='text-center'>Mutual Funds</h2> */}
      <div className="main-image">
        <div className="ml-1">
          <h1>Mutual Funds</h1>
          <p className="main-image-text">
            Stay ahead of the game. Let DBS Bank coach <br />
            you to be in the best financial shape of your life!
          </p>
        </div>
        <div className="image-data">
          <img
            src="https://www.axisbank.com/images/default-source/progress-with-us_new/mutual-funds.jpg"
            alt="images"
          />
        </div>
      </div>
      <div className="text-center">
        <div className="Open-account-main-di">
          {/* <h3 className="open-account-text">Open a Hinter Global Bank Account Now</h3> */}
          <button className="open-account-button">
            Open a Hinter Global Bank Account Now
          </button>
        </div>
        <h1>
          Get Bowled-over By{" "}
          <span className="span-worl-text">World-Class Features </span>
        </h1>
        <div className="rated-main-cont">
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/5-star-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              5-Star rated Mutual Funds by top investment research firm
              MorningstarT
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/compare-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Compare between Mutual Funds and buy/sell in a flash
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/mf-investment-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Tailored investments to match your agreed risk level
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/zero-transition-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Zero transaction fees on your investments and lifetime-free
              investment account
            </p>
          </div>

          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/250-mutual-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              A huge choice of top funds with over 340+ Mutual Funds
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/encrypted-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Stay safe and secure with 24x7 security and encrypted
              communications
            </p>
          </div>
        </div>

        <div className="Open-account-main-di">
          {/* <h3 className="open-account-text">Open a Hinter Global Bank Account Now</h3> */}
          <button className="open-account-button">
            Open a Hinter Global Bank Account Now
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="all-rounder-text">
          Become an All-rounder with Hinter Global Bank{" "}
          <span className="mutual-fund-text"> Mutual Fund Education </span>
        </p>
        <p className="text-dark">
          The more you know, the better you get at your own game. <br /> Let the
          Unbank be your friend and train to make smarter investments
        </p>
      </div>

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol order="last">
            <h2>digiWealth Newsletter </h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/weekly-investment-icon.png"
              alt="imagec"
            />
          </MDBCol>
          <MDBCol>
            <h2> Expert Blogs </h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/blog-icon.png"
              alt=""
            />
          </MDBCol>
          <MDBCol order="first">
            <h2>Educational Videos​</h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/education-icon.png"
              alt="images"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* 2nd box */}
      <div className="text-center mt-4">
        <p className="all-rounder-text">
          Stay ahead of the curve with{" "}
          <span className="mutual-fund-text"> tailor-made insights</span>
        </p>
        <p className="text-dark">
          Want to take baby steps towards the bigger game? We’ve got your back.
          Hinter Global Bank gives you handpicked portfolio insights, goal-based
          <br />
          planning sessions, analyses your portfolio and sends you communication
          tailored to your specific needs to ensure your practice doesn’t stop!
        </p>
      </div>

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol order="last">
            <h2>Goal-Based Planning</h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/goal-based-icon.png"
              alt="imagec"
            />
          </MDBCol>
          <MDBCol>
            <h2> Smart Portfolio Analysis </h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/smart-portfolio-analysis-icon.png"
              alt=""
            />
          </MDBCol>
          <MDBCol order="first">
            <h2>Intelligent Alerts​</h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/alert-icon.png"
              alt="images"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="text-center mt-3">
        {/* <h3 className="open-account-text">Open a Hinter Global Bank Account Now</h3> */}
        <button className="open-account-button">
          Open a Hinter Global Bank Account Now
        </button>
      </div>

      {/* 3rd box */}
      <div className="text-center mt-4">
        <p className="all-rounder-text">
          #Drive your{" "}
          <span className="mutual-fund-text"> investment like a pro</span>
          With digiportfolio
        </p>
        <p className="text-dark">
          Want to take baby steps towards the bigger game? We’ve got your back.
          Hinter Global Bank gives you handpicked portfolio insights, goal-based
          <br />
          planning sessions, analyses your portfolio and sends you communication
          tailored to your specific needs to ensure your practice doesn’t stop!
        </p>
      </div>

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol order="first">
            <h2>Risk profile based portfolios</h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-home/icon/portfolio-icon.png"
              alt="imagec"
            />
          </MDBCol>
          <MDBCol>
            <h2> Top rated mutual funds handpicked by Morningstar </h2>

            <img
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/5-star-icon.png"
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* mobile app information */}

      <div className="text-center bg-light">
        <p className="all-rounder-text">
          You are just a few steps away to be a part of{" "}
          <span className="mutual-fund-text"> Dream Team, Captain</span>
        </p>
        <div className="text-center mt-3">
          {/* <h3 className="open-account-text">Open a Hinter Global Bank Account Now</h3> */}
          <button className="open-account-button">
            Open a Hinter Global Bank Account Now
          </button>
        </div>
        <h1>Using digibank mobile app</h1>

        <div className="rated-main-cont">
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/smartphone-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Launch the app on your smartphone
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/navigation-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Log in and tap “Mutual Funds” in the navigation menu
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/instruction-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Follow instructions to complete verification
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/investing-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">Start investing!</p>
          </div>
          <h1>Using the DBS Bank ibanking website</h1>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/navigation-menu-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Log in and select “Mutual Funds” in the navigation menu
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/instruction-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">
              Follow instructions to complete verification
            </p>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/investing-icon.png"
              alt="images"
            />
            <p className="text-center ml-2 mt-2 rate-text ">Start investing!</p>
          </div>
        </div>
      </div>
      {/* match inning ready */}
      <div className="text-center mt-3">
        <p className="all-rounder-text">
          The Match For Your{" "}
          <span className="mutual-fund-text"> Best Innings Is Ready</span>
        </p>

        <p>
          Not sure where to invest? Too many choices, and even more doubts? If
          you think mutual fund investments are something made only for a few,{" "}
          <br />
          it’s time to think again. Become your own investment expert with
          Hinter Global Bank
        </p>

        <div className="rated-main-cont">
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/debt-mutual-fund-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  {" "}
                  Debt Mutual Funds
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Looking to invest in something that’s low-risk, low fluctuation{" "}
                <br />
                and short-term goals? Try debt mutual funds
              </p>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/equity-mutual-fund-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  {" "}
                  Equity Mutual Funds
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Got an appetite for higher risk and higher returns? Equity
                mutual <br /> funds invest in shares of different companies and
                can help you <br /> grow money for goals that are long-term.
              </p>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/elss-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  ELSS (Tax Saving Mutual Funds)
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Want to save taxes and create wealth in the long run? This one’s{" "}
                <br />
                for you! You can save up to ₹1.5 lakhs in tax deductions via{" "}
                ELSS, <br /> and save yourself from last-minute income tax
                planning too!
              </p>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/mf-investment-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  Systematic Investment Plan (SIP)
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                New to the game? Want to start small, keep it steady and tap
                into the <br /> power of compounding? Choose SIPs. Here you can
                invest as low as <br /> ₹500 and pay this fixed amount at a set
                date every month too!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Thinks thats all there is more that can from */}
      <div className="text-center mt-3">
        <p className="all-rounder-text">
          <span className="mutual-fund-text">Think That's All?</span>
          There's more where that came from!
        </p>

        <p>
          Whether it’s smarter savings, better investments, easy personal loans,
          international fund transfers - your digibank is designed to help you{" "}
          <br />
          live better. It’s so easy, it feels like magic!
        </p>

        <div className="rated-main-cont">
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/personal-loan-circle-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  {" "}
                  Personal Loan
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Fast-track your life with instant paperless DBS Bank personal
                loans of up to ₹15 Lakhs.
              </p>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/fixed-deposit-circle-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  {" "}
                  Fixed Deposite
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Stay ready for every contingency and rainy days with fixed
                deposits at a higher interest rate.
              </p>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/recurring-deposit-circle-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  Recurring Deposite
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Make goal-oriented savings effortlessly at a higher interest
                rate!
              </p>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/remittance-circle-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  Remittance
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Keep love and life undelayed with instant international
                transfers at no extra cost.
              </p>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/insurance-circle-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                <a href="xxx" className="mutual-link-text">
                  Insurance
                </a>
              </p>
              <p className="text-center ml-2 rate-text mutual-fund-text-gapcover ">
                Through thick and thin, we’ve got you covered with health
                insurance plans for the family, <br /> automobile insurance and
                travel insurance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3 ">
        <div className="Open-account-main-di">
          {/* <h3 className="open-account-text">Open a Hinter Global Bank Account Now</h3> */}
          <button className="open-account-button">
            Open a Hinter Global Bank Account Now
          </button>
        </div>
        <h1>Frequently Asked Questions</h1>
        <div className="show-hide-text hide-show-main-cont">
          <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? (
              <img
                className="show-hide-image"
                src="https://tse2.mm.bing.net/th?id=OIP.RpCRB_TLTVvhE6_YUPmQ6wHaHa&pid=Api&P=0&h=180"
                alt="images"
              />
            ) : (
              <img
                className="show-hide-image"
                src="https://tse3.mm.bing.net/th?id=OIP.kigNVL-SnQZyDhAohhXTZAHaHa&pid=Api&P=0&h=180"
                alt="images"
              />
            )}
            <p className="show-hide-text-data">
              How can I buy and sell Mutual Funds on the digibank app?
            </p>
          </button>
          {isVisible && (
            <div>
              <p className="text-dark">
                Once you have registered for Mutual Funds on the digibank app
                and completed your risk profile, you can start buying and <br />
                selling Mutual Fund schemes on the app. Just select ‘Mutual
                Funds’ in the navigation menu and then choose a fund based on{" "}
                <br />
                name, category, offers, investment goals or performance.
              </p>
            </div>
          )}
        </div>
        {/* 2nd shwo data */}
        <div className="show-hide-text hide-show-main-cont">
          <button onClick={() => setIsVisible2(!isVisible2)}>
            {isVisible2 ? (
              <img
                className="show-hide-image"
                src="https://tse2.mm.bing.net/th?id=OIP.RpCRB_TLTVvhE6_YUPmQ6wHaHa&pid=Api&P=0&h=180"
                alt="images"
              />
            ) : (
              <img
                className="show-hide-image"
                src="https://tse3.mm.bing.net/th?id=OIP.kigNVL-SnQZyDhAohhXTZAHaHa&pid=Api&P=0&h=180"
                alt="images"
              />
            )}
            <p className="show-hide-text-data">
              Can I link my Mutual Fund transactions to multiple accounts?
            </p>
          </button>
          {isVisible2 && (
            <div>
              <p className="text-dark">
                All Mutual Fund investments made on the digibank app/ Internet
                Banking platform will be linked to your savings account held{" "}
                <br />
                with Hinter Global Bank. Clients can view and redeem their
                existing holdings via the digibank app/internet banking
                platforms.
              </p>
            </div>
          )}
        </div>
        {/* 3rd show hite text toggle */}
        <div className="show-hide-text hide-show-main-cont">
          <button onClick={() => setIsVisible3(!isVisible3)}>
            {isVisible3 ? (
              <img
                className="show-hide-image"
                src="https://tse2.mm.bing.net/th?id=OIP.RpCRB_TLTVvhE6_YUPmQ6wHaHa&pid=Api&P=0&h=180"
                alt="images"
              />
            ) : (
              <img
                className="show-hide-image"
                src="https://tse3.mm.bing.net/th?id=OIP.kigNVL-SnQZyDhAohhXTZAHaHa&pid=Api&P=0&h=180"
                alt="images"
              />
            )}
            <p className="show-hide-text-data">
              Do I have to register separately with asset management AMCs?
            </p>
          </button>
          {isVisible3 && (
            <div>
              <p className="text-dark">
                No, you don’t need to register separately. After registering
                with us, you can invest with all the <br /> AMCs available on
                the digibank app.
              </p>
            </div>
          )}
        </div>
        <h3>Disclaimer</h3>
        <p>
          Model portfolios are curated by MorningstarTM based on general risk
          levels and are not on personalised suggestions. Prior to investing, we <br/>
          recommend you consult your financial advisor to evaluate the product
          offering’s suitability as per your requirements.
        </p>
      </div>
    </>
  );
};

export default MutualFunds;
