import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const CorporateFooter = () => {
  return (
    <>
      <div className="text-center">
        <h2>Bespoke solutions for Corporates</h2>
        <h4>
          Hinter Global’ leading-edge digital solutions will help you streamline
          processes, reduce costs and grow your business.
        </h4>
        <MDBContainer>
          <MDBRow>
            <MDBCol order="first">
              <img
                src="https://www.dbs.com/documents/115284938/389716186/684-x-630.jpg/c2013394-6717-1225-249e-2661ed7ccc49?t=1675148275957"
                alt="imagec"
              />{" "}
            </MDBCol>
            <MDBCol>
              {" "}
              <h4>
                {" "}
                Delivering India’s First Round-the-Clock Renewable Energy
                Project{" "}
              </h4>
              <h6>
                India wants non-fossil fuel power sources to provide half of its
                electricity supply by 2030. To achieve this target, the country
                which saw power consumption jump 48% in the decade to 2021, must
                massively scale up funding for renewables.
              </h6>
            </MDBCol>
            <MDBCol order="last"> <img src="https://www.dbs.com/documents/1055280/115350541/Mobile_Banner_373x360_1.jpg/1396d102-d012-cf0f-64e9-cfd7b654d563?t=1614309251159" alt="imageco" /> </MDBCol>
          </MDBRow>
        </MDBContainer>

        <h2>Supporting Your Business Needs</h2>
        <h4>
          Leveraging Hinter Global’ expertise and global network, we offer
          customised insights and services to help you achieve your goals.​
        </h4>

        <MDBContainer>
      <MDBRow>
        <MDBCol order='last'>
         <h2> Group Research</h2>
         <p>We help your business make sense of credit, foreign exchange, interest rates and commodity markets</p>
         <img src="https://www.dbs.com/documents/1055280/115350541/business-insights.jpg/246587e6-5c1f-9d0b-2e25-b33d1599a3dd?t=1614157678862" alt="imagec" />
        </MDBCol>
        {/* <MDBCol>Second in DOM, unordered</MDBCol> */}
        <MDBCol order='first'>
          <h2>Treasury Prism</h2>
          <p>Experience the world's first online treasury and cash management simulation platform</p>
       <img src="https://www.dbs.com/documents/1055280/392414533/Custody-industry_Thumbnail-684x630.jpg/202550ef-8b83-c542-6066-726cc8137e74?t=1680052044955" alt="images" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>

      </div>
    </>
  );
};

export default CorporateFooter;
