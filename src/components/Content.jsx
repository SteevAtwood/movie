import React from "react";
import { Layout, Input, Typography } from "antd";

import "../components/MainPage/MainPage.css";
import "./Share.css";

const { Content } = Layout;
const { Title } = Typography;

const Body = () => (
  <Layout className="main">
    <Content className="main-content">
      <Title className="main-content-h1">Movies Search</Title>
      <Input
        placeholder="Then press enter.."
        className="main-input-search"
        onPressEnter
      />
    </Content>
  </Layout>
);

export default Body;
