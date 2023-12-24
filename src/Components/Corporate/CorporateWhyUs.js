import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CorporateNav from "./CorporateNav";
import "./CorporateWhyUs.css";

const CorporateWhyUs = () => {
  return (
    <>
      <CorporateNav />
      <div className="text-center whyus-container">
        <h1 className="text-white">Why Us</h1>

        <p className="text-white">
          As the leading bank in Asia, we help our clients succeed and make a
          positive impact on their communities
        </p>
      </div>
      <div className="text-center">
        <h1>Why Hinter Global Corporate Banking​</h1>
        <p>
          At Hinter Global, we help clients to realise their full potential and
          be future-ready. Leveraging our regional connectivity, <br /> industry
          expertise and digital capabilities, we work with corporates to develop
          customised solutions to help them meet their <br /> short-term
          priorities and long-term strategic goals
        </p>
        <p className="mt-2">
          Backed by AA- and Aa1 credit ratings, we offer a full range of
          corporate and institutional banking products and services in the
          markets we operate.​
        </p>
        <h3 className="text-center mt-2">Hinter Global Bank India</h3>
        <p>
          DBS Bank has been present in India for 26 years, having opened its
          first office in Mumbai in 1994. DBS Bank India Limited is first among{" "}
          <br />
          the large foreign banks in India to start operating as a wholly-owned,
          locally incorporated subsidiary of a leading global bank. <br /> As a
          bank born and bred in Asia, DBS understands the intricacies of doing
          business in the region's most dynamic markets. <br /> DBS is committed
          to building lasting relationships with customers and positively
          impacting <br />
          communities through supporting social enterprises as it banks the
          Asian way.
        </p>
      </div>

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol order="last">
            <h2> We are recognised internationaly for excellence </h2>
            <p>
              Hinter Global has garnered a slew of global accolades,
              underscoring our growing presence among banking leaders worldwide.
            </p>
            <img
              src="https://www.dbs.com/documents/1055280/115350541/business-insights.jpg/246587e6-5c1f-9d0b-2e25-b33d1599a3dd?t=1614157678862"
              alt="imagec"
            />
          </MDBCol>
          <MDBCol>
            <h2>  We support business across 18 markets Globaly. </h2>
            <p>
              Hinter Global’ global network
              of experts enables us to support our customers globally with a
              comprehensive suite of customised solutions and insights
            </p>
            <img
              src="https://www.dbs.com/documents/1055280/115315041/Changing-cash-684x630.png/39e3e7b0-a1e5-6546-821f-98b260a3b655?t=1684489174407"
              alt=""
            />
          </MDBCol>
          <MDBCol order="first">
            <h2>Digitisation of KYC and customer onboarding process​</h2>
            <p>
              Learn how Hinter Global is connecting with global KYC platforms
              and data registries to make the customer onboarding journey
              seamless and paperless across the region.
            </p>
            <img
              src="https://www.dbs.com/documents/1055280/392414533/Custody-industry_Thumbnail-684x630.jpg/202550ef-8b83-c542-6066-726cc8137e74?t=1680052044955"
              alt="images"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default CorporateWhyUs;
