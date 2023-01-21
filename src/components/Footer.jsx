import React from "react";
import { Layout, Button, Typography, Input } from "antd";

import "../components/MainPage/MainPage.css";
import "./Share.css";

const { Footer } = Layout;

const Footerr = () => (
  <Layout className="main">
    <Footer className="main-footer">
      <ul>
        <li>
          <a href="/smlinks">Media</a>
        </li>
        <li>
          <a href="/privacyPolicy">Policy</a>
        </li>
        <li>
          <a href="/Terms&Conditions">Term & Conditions</a>
        </li>
      </ul>
    </Footer>
  </Layout>
);

export default Footerr;
