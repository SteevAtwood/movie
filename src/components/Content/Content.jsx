import React from "react";
import { Layout, Input, Typography } from "antd";
import MovieList from "../../container/MovieList/MovieList";

import "../MainPage/MainPage.css";
import "./Content.css";

const { Content } = Layout;
const { Title } = Typography;

const CustomContent = () => (
  <Layout className="main">
    <Content className="main-content">
      <Title className="main-content-h1">Movies Search</Title>
      <Input
        placeholder="Then press enter.."
        className="main-input-search"
        onPressEnter
      />
      <MovieList />
    </Content>
  </Layout>
);

export default CustomContent;
