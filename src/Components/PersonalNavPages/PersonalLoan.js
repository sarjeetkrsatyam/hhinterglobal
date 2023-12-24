import React, { useState } from "react";
import PersonalBankNav from "../PersonalBankNav";
import "./PersonalLoan.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const PersonalLoan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);

  return (
    <>
      <PersonalBankNav />
      <div className="text-center personal-loan-main-cont">
        <h1 className="text-dark">Personal Loan</h1>
        <p className="text-light">
          Access funds easily and get closer to your aspirations via an instant
          personal loan from Hinter Global Bank.
        </p>
        <div className="Open-account-main-di mt-5">
          {/* <h3 className="open-account-text">Open a Hinter Global Bank Account Now</h3> */}
          <button className="open-account-button">Apply Now</button>
        </div>
      </div>
      <div className="text-center">
        <h1>
          Hinter Global Bank Personal Loan{" "}
          <span className="text-danger">for every need</span>{" "}
        </h1>
        <p>
          A Personal Loan from DBS Bank allows you to fulfil your aspirations
          with ease. Whether you want to throw a fancy wedding, book a dream{" "}
          <br />
          vacation, or purchase something exclusive and/or expensive, you can
          obtain the necessary funds with DBS Bank Personal Loans. With <br />
          collateral free loans up to INR 15 lakh and competitive interest rates
          , DBS Bank Personal Loans allow you to transform your <br />{" "}
          aspirations into reality.
        </p>
        <p>
          With a quick Personal Loan from DBS Bank, you can complete the loan
          application process online in minutes and get rapid fund disbursal
          <br />
          with our fast-track Personal Loan facility. Check your loan
          eligibility and get instant Personal Loan sanction depending on your{" "}
          <br />
          eligibility. You also have total flexibility with longer loan
          repayment tenures and can easily repay the Personal Loan in
          <br />
          pocket-friendly EMIs
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-dark">
          An instant online Personal Loan{" "}
          <span className="text-danger">that lets you do more</span>{" "}
        </h1>
        <p>
          Imagine a world where you have access to funds at your fingertips and
          on-demand. At DBS Bank, when you apply online for a Personal Loan, we{" "}
          <br />
          ensure you are not stuck with tedious documentation and waiting
          periods. With a DBS Bank Personal loan, <br /> you have access to the
          following features:
        </p>

        {/* box with text from here */}
        <div className="text-center mt-3">
          <p className="all-rounder-text">
            <span className="mutual-fund-text">Think That's All?</span>
            There's more where that came from!
          </p>

          <p>
            Whether it’s smarter savings, better investments, easy personal
            loans, international fund transfers - your digibank is designed to
            help you <br />
            live better. It’s so easy, it feels like magic!
          </p>

          <div className="rated-main-cont">
            <div className="rated-main-div">
              <img
                className="rate-image ml-2"
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/instant-loan-in-principle-approval-icon.png"
                alt="images"
              />
              <div>
                <h3 className="text-left ml-2  rate-text ">
                  Instant Loan In-Principle Approval
                </h3>
                <p className="text-center ml-2 ">
                  Apply for a Personal Loan, and get instant approval within
                  just a few minutes of initiating the process.
                </p>
              </div>
            </div>
            <div className="rated-main-div">
              <img
                className="rate-image ml-2"
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/clutter-free-digital-loans-icon.png"
                alt="images"
              />
              <div>
                <h3 className="text-left ml-2  rate-text ">
                  Clutter-Free Digital Loans
                </h3>
                <p className="text-center ml-2  ">
                  Worried about the endless paperwork and never-ending forms? At
                  DBS Bank, our digital-first approach <br /> ensures that you
                  do not even have to visit our bank branch. Get a Personal Loan
                  in <br />
                  India easily via our digibank app or mobile banking platforms.
                </p>
              </div>
            </div>
            <div className="rated-main-div">
              <img
                className="rate-image ml-2"
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/calendar-icon.png"
                alt="images"
              />
              <div>
                <h3 className="text-left ml-2  rate-text ">
                  3-Days Freelook Period
                </h3>
                <p className="text-center ml-2">
                  Not sure if you have made the right decision? You can cancel
                  your Personal Loan application with <br /> ease within the
                  2-day freelook period offered exclusively by DBS Bank. *Loan{" "}
                  <br />
                  processing charges and tax are not refundable.
                </p>
              </div>
            </div>
            <div className="rated-main-div">
              <img
                className="rate-image ml-2"
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/better-interest-rates-icon.png"
                alt="images"
              />
              <div>
                <h3 className="text-left ml-2  rate-text ">
                  Better Interest Rates
                </h3>
                <p className="text-center ml-2">
                  Enjoy better interest rates on your Personal Loan, throughout
                  your loan tenure. At DBS Bank, our Personal <br /> Loan
                  Interest Rates, start at 10.99%* only.
                </p>
              </div>
            </div>
            <div className="rated-main-div">
              <img
                className="rate-image ml-2"
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/delight-offers-icon.png"
                alt="images"
              />
              <div>
                <h3 className="text-left ml-2  rate-text ">
                  Choice of Loan Tenure
                </h3>
                <p className="text-center ml-2 ">
                  Flexibility is key when you choose a Personal Loan. Our
                  flexible repayment tenures between <br /> 12 and 60 months
                  ensure that you always stay in control. Repay the Personal
                  Loan in easy <br /> EMIs and take advantage of the ample
                  breathing room available to you to fulfil your dreams
                </p>
              </div>
            </div>
            <div className="rated-main-div">
              <img
                className="rate-image ml-2"
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/easy-loan-repayment-icon.png"
                alt="images"
              />
              <div>
                <h3 className="text-left ml-2  rate-text ">
                  Easy Loan Repayment
                </h3>
                <p className="text-center ml-2 ">
                  Paying your Personal Loan EMIs is easy with your DBS Bank.
                  With just a few clicks on your phone <br /> you can instantly
                  make the monthly payment. You can also set standing
                  instructions on <br />
                  your bank account to repay the EMIs on a fixed date every
                  month, <br /> your Personal Loan repayment can be automated.
                </p>
              </div>
            </div>
          </div>
          {/* fghjkl */}
        </div>
      </div>
      <div className="text-center mt-2">
        <h1>
          Unlock A World of Possibilities through{" "}
          <span className="text-danger">
            Hinter Global <br /> Bank Instant Personal Loans
          </span>{" "}
        </h1>
        <p>
          At Hinter Global Bank, we offer a Personal Loan to help you fulfil
          almost any need.
        </p>

        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol order="first">
              <h2 className="text-danger">Wedding Loan </h2>

              <img
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/wedding-loans-icon.png"
                alt="imagec"
              />
              <p>
                Preparing for your big day? Avoid compromising on your vision
                for your dream wedding. A high-value Personal Loan allows you to{" "}
                pay for every expense – trousseau, venue, photography, catering,
                and much more.
              </p>
            </MDBCol>
            <MDBCol>
              <h2 className="text-danger"> Travel Loan </h2>

              <img
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/travel-loan-icon.png"
                alt=""
              />
              <p>
                Stop dreaming about that vacation and take action to embark on
                your long-awaited sojourn. Turn your Personal Loan into a Travel{" "}
                Loan and explore the world in total comfort.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol order="first">
              <h2 className="text-danger">GADGET LOAN </h2>

              <img
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/gadget-loan-icon.png"
                alt="imagec"
              />
              <p>
                Get your hands on the latest smartphones, gaming consoles,
                laptops, and other new-age tech that tickle your fancy. With a
                DBS Bank Personal Loan the gadgets you dream of are always
                within reach.
              </p>
            </MDBCol>
            <MDBCol>
              <h2 className="text-danger"> Home Renovation Loan </h2>

              <img
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/home-renovation-loan-icon.png"
                alt=""
              />
              <p>
                Thinking of a makeover for your home? Our Personal Loan gives
                you the freedom you need to take the right decisions. From
                renovations to repairs, everything you want to do can now be
                done with ease.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol order="first">
              <img
                src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/banner/wedding-couple.png"
                alt="imagec"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="text-center mt-3">
        <h1>
          {" "}
          Check your eligibility{" "}
          <span className="text-danger">within seconds</span>{" "}
        </h1>
        <p>
          With our simple eligibility criteria, anyone can apply for Personal
          Loans. You should be:
        </p>
      </div>
      {/* aligibloty data */}

      {/* aligiblity start  */}
      <div className="text-center">
        <div className="rated-main-cont">
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              style={{ height: 40, width: 40 }}
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/check-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">An Indian Citizen.</h3>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              style={{ height: 40, width: 40 }}
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/check-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">
                Between 21 and 60 years of age.
              </h3>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              style={{ height: 40, width: 40 }}
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/check-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">
                A salaried professional or a self-employed individual.
              </h3>
            </div>
          </div>
          <div className="rated-main-div">
            <img
              className="rate-image ml-2"
              style={{ height: 40, width: 40 }}
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/check-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">
                Earning at least ₹25,000 per month.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* aligiblity end  */}

      {/* Unlock dream  */}
      <div className="text-center mt-4">
        <h1>
          Unlock your dreams in{" "}
          <span className="text-danger"> 4 easy steps</span>{" "}
        </h1>
        <h3>
          omplete the quick and hassle-free Personal Loan <br /> application
          process with these simple steps:
        </h3>
        <div className="rated-main-cont">
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/step-1-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                Run a quick eligibility check to assess your chances of getting{" "}
                <br />
                the Personal Loan approved. You can use our Personal Loan <br />
                Eligibility Calculator to assess your eligibility..
              </p>
            </div>
          </div>
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/step-2-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                Open your Hinter Global Bank Savings Account instantly via{" "}
                <br /> the digibank app.
              </p>
            </div>
          </div>
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/step-3-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                Complete the instant KYC verification process.
              </p>
            </div>
          </div>
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/step-4-icon.png"
              alt="images"
            />
            <div>
              <p className="text-left ml-2  rate-text ">
                Get the Personal Loan amount credited into your account.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* thnik thats all investment */}
      <div className="text-center mt-4">
        <h1>
          Think That's All?{" "}
          <span className="text-danger">
            {" "}
            There's more where that came from!
          </span>{" "}
        </h1>
        <p>
          Whether it’s smarter savings, better investments, easy personal loans,{" "}
          international fund transfers - your HinterBank <br /> is designed to
          help you live better. It’s so easy, it feels like magic!
        </p>
        <div className="rated-main-cont">
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/investment-circle-icon.png"
              alt="images"
            />

            <div>
              <h3 className="text-left ml-2  rate-text ">Investment</h3>
              <p className="text-center ml-2 ">
                You don’t need to be a finance guru to make smart investment
                choices. <br /> You’ve got DBS Bank to help you become your own
                expert.
              </p>
            </div>
          </div>
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/fixed-deposit-circle-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">Fixed Deposite</h3>
              <p className="text-center ml-2 ">
                Stay ready for every contingency and rainy days with fixed{" "}
                <br />
                deposits at a higher interest rate.
              </p>
            </div>
          </div>
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/dbs-circle-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">
                HinterBank by Hinter Global
              </h3>
              <p className="text-center ml-2 ">
                An app for all your baking needs by Asia's safest bank.
              </p>
            </div>
          </div>
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/remittance-circle-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">Remittance</h3>
              <p className="text-center ml-2 ">
                Keep love and life undelayed with instant international <br />
                transfers at no extra cost.
              </p>
            </div>
          </div>
          <div className="rated-main-div mt-2">
            <img
              className="rate-image ml-2"
              src="https://www.dbs.com/in/iwov-resources/media/images/personal-product/icon/insurance-circle-icon.png"
              alt="images"
            />
            <div>
              <h3 className="text-left ml-2  rate-text ">Insurance</h3>
              <p className="text-center ml-2 ">
                Through thick and thin, we’ve got you covered with health
                insurance <br /> plans for the family, automobile insurance and
                travel insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* frequently ask question */}
      <div className="text-center Open-account-main-di mt-5">
        {/* <h3 className="open-account-text">Open a Hinter Global Bank Account Now</h3> */}
        <button className="open-account-button">Apply Now</button>
      </div>
      <p className="text-center font-italic">
        Already have login ID & password but your loan is not disbursed? <br />{" "}
        <span className="text-danger font-italic">
          {" "}
          <a href="xxx" className="text-danger">
            Click here to Login
          </a>{" "}
        </span>{" "}
      </p>
      <h1 className="text-center mt-4">Frequently Asked Questions</h1>

      <div className=" show-hide-text hide-show-main-cont">
        <button onClick={() => setIsVisible(!isVisible)}>
          <div className="d-flex">
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
              What is the minimum and maximum Personal Loan amount that Hinter{" "}
              
              Global Bank provides?
            </p>
          </div>
        </button>
        {isVisible && (
          <div>
            <p className="text-dark">
              At Hinter Global Bank, we provide Personal Loans ranging from
              ₹25,000 to ₹15 lakhs
            </p>
          </div>
        )}
      </div>
      {/* 2nd popup */}
      <div className=" show-hide-text hide-show-main-cont">
        <button onClick={() => setIsVisible2(!isVisible2)}>
          <div className="d-flex">
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
              What charges does the bank levy on Hinter Global Bank Personal{" "}
              
              Loans?
            </p>
          </div>
        </button>
        {isVisible2 && (
          <div>
            <p className="text-dark">
              We charge a one-time loan processing fee, including taxes during
              loan approval. You may also need to bear circumstantial charges{" "}
              
              pertaining to EMI repayments, prepayments, and foreclosure.
            </p>
          </div>
        )}
      </div>
      {/* 3rd popup */}
      <div className=" show-hide-text hide-show-main-cont">
        <button onClick={() => setIsVisible3(!isVisible3)}>
          <div className="d-flex">
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
              How to calculate the estimated Personal Loan EMI amount?
            </p>
          </div>
        </button>
        {isVisible3 && (
          <div>
            <p className="text-dark">
              You can use DBS Bank's Personal Loan EMI calculator to compute the
              potential EMI for your Personal loan, based on the applicable{" "}
              
              interest rates and loan repayment tenure. Our free-to-use online
              tool doubles as a budget planner to suit your loan repayment{" "}
            
              ability.
            </p>
          </div>
        )}
      </div>
      {/* 4rth popup */}
      <div className=" show-hide-text hide-show-main-cont">
        <button onClick={() => setIsVisible4(!isVisible4)}>
          <div className="d-flex">
            {isVisible4 ? (
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
              How long does it take for Hinter Global Bank to approve Personal
              Loans?
            </p>
          </div>
        </button>
        {isVisible4 && (
          <div>
            <p className="text-dark">
              At Hinter Global Bank, we provide fast-track Personal Loan
              approval and disbursals. We disburse the Personal Loan{" "}
              amount within 4 to 48 hours.
            </p>
          </div>
        )}
      </div>
      {/* 5th popup */}
      <div className=" show-hide-text hide-show-main-cont">
        <button onClick={() => setIsVisible5(!isVisible5)}>
          <div className="d-flex">
            {isVisible5 ? (
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
              Do I need to pledge any collateral to avail of a Personal Loan?
            </p>
          </div>
        </button>
        {isVisible5 && (
          <div>
            <p className="text-dark">
              No, Hinter Global Bank offers collateral-free Personal Loans We do
              not ask you to provide any asset as security.
            </p>
          </div>
        )}
      </div>
      {/* 6th popup */}
      <div className=" show-hide-text hide-show-main-cont">
        <button onClick={() => setIsVisible6(!isVisible6)}>
          <div className="d-flex">
            {isVisible6 ? (
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
              How can I ensure Personal Loan approval?
            </p>
          </div>
        </button>
        {isVisible6 && (
          <div>
            <p className="text-dark">
              You can ensure the approval of your Personal Loan in India by
              fulfilling our eligibility criteria and providing the necessary
              documents requested by the bank to process the loan application.
            </p>
          </div>
        )}
      </div>
      {/* Popup different way */}
    </>
  );
};

export default PersonalLoan;
