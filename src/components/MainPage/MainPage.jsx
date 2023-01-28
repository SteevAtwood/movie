import React from "react";

import CustomHeader from "../Header/Header";
import CustomContent from "../Content/Content";
import CustomFooter from "../Footer/Footer";

import "./MainPage.css";
import "../../components/Share.css";

const MainPage = () => {
  return (
    <div>
      <CustomHeader />
      <CustomContent />
      <CustomFooter />
    </div>
  );
};

export default MainPage;
