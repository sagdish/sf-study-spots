import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import Default from './components/Default';
import Spot from './components/Spot/Spot';
import Libraries from './components/RealTimeList/LibraryList';
import Home from './components/Home';
import CafeList from './components/RealTimeList/CafeList';
import Logo from './components/images/MainLogo.png';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Default } />
        <>
        <Layout>
          <Sider className="AntdSider" width={220} style={{
            // overflow: "auto",
            // height: "100vh",
            background: "#fff"
          }}>

            {/* Top logo image */}
            <div className="logoImage">
              <Link to="/">
                <img src={ Logo } alt="logo" style={{ width: "180px" }} />
              </Link>
            </div>
            
            {/* Side Navigation: */}
            <div className="sideNavContent">
              <p>Show by:</p>

              <Menu
              
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ height: '100%'}}
              >
                <Menu.Item key="1">
                  <Link to="/home">
                    <Icon type="edit" />My preference
                  </Link>
                </Menu.Item>

                <Menu.Item key="2">
                  <Link to="/cafelist">
                    <Icon type="compass" />SF Locations
                  </Link>
                </Menu.Item>

                <Menu.Item key="3">
                  <Link to="/libraries">
                  <Icon type="book" />Libraries
                  </Link>
                </Menu.Item>

              </Menu>

            </div>

          </Sider>
          <Layout>

            {/* Header component */}
            <Header style={{
              background: "#fff",
              fontSize: "20px",
            }}>
              <span className="full-text">SF Study Spots - Places where you can study in San Francisco Bay Area</span>
              <span className="short-text">SF Study Spots</span>
            </Header>

            {/* Main content */}
            <Content>
                <Route path="/spot" component={ Spot } />
                <Route path="/libraries" component={ Libraries } />
                <Route path="/home" component= { Home } />
                <Route path="/cafelist" component= { CafeList } />
            </Content>

            <Footer>Footer</Footer>
          </Layout>
        </Layout>
        </>
      </Switch>
    </div>
  );
}

export default App;