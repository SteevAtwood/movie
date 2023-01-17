import React from "react";
import { Layout, Button, Typography, Input } from "antd";

import "./Main.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Main = () => {
  return (
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

      <Content className="main-content">
        <Title className="main-content-h1">Movies Search</Title>
        <Input
          placeholder="Then press enter.."
          className="main-input-search"
          onPressEnter
        />
      </Content>

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
};

export default Main;
