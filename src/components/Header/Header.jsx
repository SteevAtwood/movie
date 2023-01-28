import React from "react";
import { Layout, Button } from "antd";

import "../MainPage/MainPage.css";
import "./Header.css";

const { Header } = Layout;

const CustomHeader = () => (
  <Layout className="main">
    <Header className="main-header">
      <a href="/" className="Logo">
        <img src="Logo.png" className="Img"></img>
      </a>
      <div className="main-btn-holder">
        <Button type="primary" className="main-btn">
          Sign In
        </Button>
        <Button type="primary" className="main-btn log">
          Log In
        </Button>
      </div>
    </Header>
  </Layout>
);

export default CustomHeader;
