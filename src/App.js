import React, { Component } from 'react';
import './App.css';
import Navigate from './components/navigate';
import BreadcrumbNavigate from './components/breadCrumb'
import { Layout} from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

const Search = Input.Search;
const { Header, Content, Footer } = Layout;
const navigateNameList = ["首页", "活动", "未来网络学院", "实验平台", "特色", "知识社区", "网络平台优化"];
const logList = ["登陆", "注册"];
const BreadcrumbNameList = ["SDN","NFV","NETDEVOPS","5G","物联网","网络安全","云计算","大数据","AI"]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div>
              <Row>
                <Col span={2}>
                  <div className="logo" />
                </Col>
                <Col span={12}>
                  <Navigate nameList={navigateNameList} current="0" theme="dark"></Navigate>
                </Col>
                <Col span={4}>
                  <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                  />
                </Col>
                <Col span={6}>
                  <Navigate nameList={logList} onClick="static" theme="dark"></Navigate>
                </Col>
              </Row>
            </div>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Navigate nameList={BreadcrumbNameList} theme="white"></Navigate> */}
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Graduation design ©2018 Created by wien
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
