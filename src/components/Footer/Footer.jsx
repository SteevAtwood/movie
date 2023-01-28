import React from "react";
import { Layout, Button, Typography, Input } from "antd";

import "../MainPage/MainPage.css";
import "./Footer.css";

const { Footer } = Layout;

const CustomFooter = () => (
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

export default CustomFooter;
