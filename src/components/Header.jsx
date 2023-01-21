import React from "react";
import { Layout, Button } from "antd";

import "../components/MainPage/MainPage.css";
import "./Share.css";

const { Header } = Layout;

const Headerr = () => (
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

export default Headerr;
