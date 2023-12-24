import React from "react";
import "./PersonalBank.css";
import PersonalBankNav from "./PersonalBankNav";

const PersonalBank = () => {
  return (
    <div className="container-fluid p-0">
      <PersonalBankNav />

      <div className="image-cont">
        <img src="https://miro.medium.com/v2/resize:fit:700/1*8DrXycGJXa7WNUSRTKokoQ.png" />
      </div>

      <div className="container-fluid p-0 m-2 text-center naighbout-text-main-cont ">
        <h1>World's best digital bank,</h1>
        <h2>now in your neighborhood</h2>
        <div class="row">
          <div className="col-6 order-last naighbout-flex-div ">
          <div className="neighbour-cont">
              {" "}
              <img src="https://www.dbs.com/in/iwov-resources/media/images/home/home-revamp/asia_finest.png" />{" "}
              Asia's Safest Bank{" "}
            </div>
            <div className="neighbour-cont">
              {" "}
              <img src="https://www.dbs.com/in/iwov-resources/media/images/home/home-revamp/world_best.png" />
              World's Best Bank{" "}
            </div>
            <div className="neighbour-cont">
              {" "}
              <img src="https://www.dbs.com/in/iwov-resources/media/images/home/home-revamp/worlds-best-digital-bank-icons.png" />
              Presence across 350+ cities{" "}
              <div>ddjkjdncd</div>
            </div>
          </div>

          <div class="col-6 order-first">
            <img src="https://wp-krypton.s3.amazonaws.com/wp-content/uploads/sites/3/2020/06/OpenBanking_1354886600-1.jpg" />
          </div>
        </div>
      </div>

      <div className="text-center interest-line-div">
        <h3>
          Now enjoy interest rates upto 7% p.a.* on your savings account{" "}
          <a href="/">Open an Account</a>{" "}
        </h3>
      </div>
      {/* Interest here start */}
      <div className="container-fluid p-0 m-2 text-center naighbout-text-main-cont ">
        <h1>World's best digital bank,</h1>
        <h2>now in your neighborhood</h2>
        <div class="row">
          <div className="col-7 order-first  ">
            <h1>Savings Account interest rates can’t get BIGGER than this</h1>
            <h5>
              Now enjoy interest rates upto 7% p.a.* on your savings accoun
            </h5>
            <div style={{ display: "flex" }}>
              <div className="neighbour-cont">
                {" "}
                <img src="https://www.dbs.com/in/iwov-resources/media/images/home/home-revamp/amazon_83x82.png" />{" "}
                Amazon Pay Gift Card worth up to Rs 250{" "}
              </div>
              <div className="neighbour-cont">
                {" "}
                <img
                  src="https://www.dbs.com/in/iwov-resources/media/images/home/home-revamp/interest-rate-icon.jpg"
                  style={{ height: 80, width: 100 }}
                />
                Get 5X benefits through exclusive offers, memberships, and
                vouchers.{" "}
              </div>
              <div className="neighbour-cont">
                {" "}
                <img src="https://www.dbs.com/in/iwov-resources/media/images/home/home-revamp/prime-lite-membership_83x82.png" />
                Times Prime Lite Membership with benefits worth Rs 25,000*{" "}
              </div>
            </div>
            <h4 className="mt-2">
              Get annual savings up to Rs 25,000 with exclusive offers on debit
              card
            </h4>
          </div>

          <div class="col-5 order-last">
            <img src="https://www.tradesmart.cz/wp-content/uploads/2018/08/interest.jpg" />
          </div>
        </div>
      </div>
      {/* Interest here end  */}
    </div>
  );
};

export default PersonalBank;
