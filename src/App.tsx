import { Col, Layout, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Route, Routes } from 'react-router';
// import logo from './logo.svg';
import Index from './page/Index/Index'
import Search from './page/SearchByPid/SearchByPid'
import './App.css';
// import Title from 'antd/lib/skeleton/Title';
import {Typography} from 'antd'
import { Link } from 'react-router-dom';
const {Text} = Typography
function App() {
  const logo = "http://q1.qlogo.cn/g?b=qq&nk=1205906375&s=640"
  return (
    <Layout>
      <Header>
        <Row align="middle">
          <Col flex="70px">
            <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </Col>
          <Col flex={1}><Text style={{color:"white"}}>祈妈妈天下第一</Text></Col>
        </Row>
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Content>
      {/* <Footer style={{textAlign:"center"}}>
        <Text type="secondary">footer</Text>
      </Footer> */}
    </Layout>
  );
}

export default App;
