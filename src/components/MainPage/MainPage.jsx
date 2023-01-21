import React from "react";

import Headerr from "../Header";
import Body from "../Content";
import Footerr from "../Footer";

import "./MainPage.css";
import "../../components/Share.css";

const MainPage = () => {
  return (
    <div>
      <Headerr />
      <Body />
      <Footerr />
    </div>
  );
};

export default MainPage;
