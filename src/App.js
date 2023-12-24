import logo from "./logo.svg";

// import './App.css';
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";
import Header from "./Components/Header";
import MiddlePage from "./Components/MiddlePage";
import Footer from "./Components/Footer";

// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Switch, useNavigate } from "react-router-dom";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import PersonalBank from "./Components/PersonalBank";
import PersonalBankNav from "./Components/PersonalBankNav";
import CorporateBank from "./Components/Corporate/CorporateBank";
import CorporateSolution from "./Components/Corporate/CorporateSolution";
import CorporateWhyUs from "./Components/Corporate/CorporateWhyUs";
import MutualFunds from "./Components/PersonalNavPages/MutualFunds";
import DigiPortfolio from "./Components/PersonalNavPages/DigiPortfolio";
import PersonalLoan from "./Components/PersonalNavPages/PersonalLoan";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="personabank" element={<PersonalBank />}></Route>
          <Route exact path="corporatebank" element={<CorporateBank />}></Route>
          <Route exact path="corporatesolution" element={<CorporateSolution />}></Route>
          <Route exact path="corporatewhyus" element={<CorporateWhyUs />}></Route>
          <Route exact path="personalbankmutual" element={<MutualFunds />}></Route>
          <Route exact path="digiportfolio" element={<DigiPortfolio />}></Route>
          <Route exact path="personalloan" element={<PersonalLoan />}></Route>

          {/* <Route exact path="personabanknav" element={<PersonalBankNav />}></Route> */}
          {/* <Route
            exact
            path="/Login"
            element={ <LoginPage/>}
          ></Route>
          <Route
            exact
            path="/Signup"
            element={<SignupPage/> }
          ></Route>
            <Route
            exact
            path="/Dashboard"
            element={<DashboardHome/>}
          ></Route> */}
        </Routes>
      </Router>
     
      <Footer />
    </>
  );
}

export default App;
