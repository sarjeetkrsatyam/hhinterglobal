import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./CorporateMiddle.css";
import CorporateNav from "./CorporateNav";

const CorporateSolution = () => {
  return (
    <>
      <CorporateNav />
      <div className="solution-image-container">
        <h1 className="text-center text-white">Solutions</h1>
        <h3 className="text-center text-white mt-4">
          Providing bespoke solutions to help clients navigate the business
          landscape effectively
        </h3>
      </div>

      <div className="text-center">
        <h1>Transform with our digital solutions</h1>
        <h4 className="mb-5">
          Hinter Global’ leading-edge digital solutions will help you <br />{" "}
          streamline processes, reduce costs and grow your business.
        </h4>

        <MDBContainer>
          <MDBRow>
            <MDBCol order="last">
              <h2> Hinter Global's Group Research</h2>
              <p>
                We help your business make sense of credit, foreign exchange,
                interest rates and commodity
              </p>
              <img
                src="https://www.dbs.com/documents/1055280/115350541/business-insights.jpg/246587e6-5c1f-9d0b-2e25-b33d1599a3dd?t=1614157678862"
                alt="imagec"
              />
            </MDBCol>
            <MDBCol>
              <h2>An integrated banking experience with IDEAL </h2>
              <p>
                Manage your finance conventialy with our easy to use online
                platform
              </p>
              <img
                src="https://www.dbs.com/documents/1055280/115315041/Changing-cash-684x630.png/39e3e7b0-a1e5-6546-821f-98b260a3b655?t=1684489174407"
                alt=""
              />
            </MDBCol>
            <MDBCol order="first">
              <h2>API solutions for your business</h2>
              <p>
                Digitise your business and enhance customer experience with
                API-driven solution
              </p>
              <img
                src="https://www.dbs.com/documents/1055280/392414533/Custody-industry_Thumbnail-684x630.jpg/202550ef-8b83-c542-6066-726cc8137e74?t=1680052044955"
                alt="images"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        {/* Second part */}
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol order="last">
              <div className="bg-image">
                <img
                  src="https://www.dbs.com/documents/1055280/118040132/trade-digitalisation-mobile.jpg/da4f1262-76d7-da73-0c3d-e535ef8719a6?t=1612936468269"
                  className="img-fluid"
                  alt="Sample"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <div className=" justify-content-center align-items-center h-100">
                    <h3 className="text-white mb-0">
                      Partnerships with Digital Trade Platforms
                    </h3>
                    <h5 className="text-white mb-0">
                      Boost efficiency and end to end Letter of credit
                      settlement
                    </h5>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div className="bg-image">
                <img
                  src="https://www.dbs.com/documents/1055280/115284980/cash-digitalisation-tb-684x630.jpg/b540afc5-ada4-f2f8-f580-6cc535c6087b?t=1613461910133"
                  className="img-fluid"
                  alt="Sample"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <div className=" justify-content-center align-items-center h-100">
                    <h3 className="text-white mb-0">
                      Cash Management Digitalisation
                    </h3>
                    <h5 className="text-white mb-0">
                      Driving seamless connectivity for cross-border trade with
                      digital solutions
                    </h5>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol order="first">
              <div className="bg-image">
                <img
                  src="https://www.dbs.com/documents/1055280/118040132/trade-digitalisation-mobile.jpg/da4f1262-76d7-da73-0c3d-e535ef8719a6?t=1612936468269"
                  className="img-fluid"
                  alt="Sample"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <div className=" justify-content-center align-items-center h-100">
                    <h3 className="text-white mb-0">Trade Digitalisation</h3>
                    <h5 className="text-white mb-0">
                      Solving your business problems with digital solutions
                    </h5>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <h1>Our banking solutions</h1>
        <h5>
          Leverage Hinter Global’ comprehensive suite of banking solutions to
          finance your growth, manage risk and transact more effectively.​
        </h5>
        <MDBContainer>
          <MDBRow>
            <MDBCol order="last">
              <h2> Future-ready trade finance</h2>
              <p>
                Power your growth with innovative global trade and supply chain
                finance solutions
              </p>
              <img
                src="https://www.dbs.com/documents/1055280/115350541/business-insights.jpg/246587e6-5c1f-9d0b-2e25-b33d1599a3dd?t=1614157678862"
                alt="imagec"
              />
            </MDBCol>
            <MDBCol>
              <h2>Hinter Global MAX </h2>
              <p>Quick and Seamless Merchant Collection</p>
              <img
                src="https://www.dbs.com/documents/1055280/115315041/Changing-cash-684x630.png/39e3e7b0-a1e5-6546-821f-98b260a3b655?t=1684489174407"
                alt=""
              />
            </MDBCol>
            <MDBCol order="first">
              <h2>Manage your cash processes​</h2>
              <p>
                We can make your cash work harder for you across your entire
                business
              </p>
              <img
                src="https://www.dbs.com/documents/1055280/392414533/Custody-industry_Thumbnail-684x630.jpg/202550ef-8b83-c542-6066-726cc8137e74?t=1680052044955"
                alt="images"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default CorporateSolution;
