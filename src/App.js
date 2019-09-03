import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Modal, Drawer } from 'antd';

import Default from './components/Default';
import Spot from './components/Spot/Spot';
import Libraries from './components/RealTimeList/LibraryList';
import Home from './components/Home';
import CafeList from './components/RealTimeList/CafeList';
import LocationGetter from './components/RealTimeList/GetLocation';
import Logo from './components/images/MainLogo.png';
import './App.css';


const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [ drawerVisible, setDrawer ] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Default } />
        <>
        <Layout>
          <Sider className="AntdSider" style={{
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
                    <Icon type="edit" theme="twoTone" />My preference
                  </Link>
                </Menu.Item>

                <Menu.Item key="2">
                  <Link to="/cafelist">
                    <Icon type="coffee" />SF Locations
                  </Link>
                </Menu.Item>

                <Menu.Item key="3">
                  <Link to="/libraries">
                  <Icon type="read" />Libraries
                  </Link>
                </Menu.Item>

                <Menu.Item key="4">
                  <Link to="/current">
                    <Icon type="compass" />Your Spots!
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
              <Icon className="hamburger" type="menu" onClick={e => setDrawer(true)}/>
              <Drawer
                title="Show by:"
                placement="left"
                width={200}
                visible={drawerVisible}
                onClose={e => setDrawer(false)}
                closable={true}
                // afterVisibleChange={e => setDrawer(false)}
                destroyOnClose={true}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  style={{ height: '100%'}}
                >
                  <Menu.Item key="1" onClick={e => setDrawer(false)}>
                    <Link to="/home">
                      <Icon type="edit" theme="twoTone" />My preference
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="2" onClick={e => setDrawer(false)}>
                    <Link to="/cafelist">
                      <Icon type="coffee" />SF Locations
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="3" onClick={e => setDrawer(false)}>
                    <Link to="/libraries">
                    <Icon type="read" />Libraries
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="4" onClick={e => setDrawer(false)}>
                    <Link to="/current">
                      <Icon type="compass" />Your Spots!
                    </Link>
                  </Menu.Item>

                </Menu>
              </Drawer>
              <span className="full-text">SF Study Spots - Places where you can study in San Francisco Bay Area</span>
              <span className="short-text">SF Study Spots</span>
            </Header>

            {/* Main content */}
            <Content>
                <Route path="/spot" component={ Spot } />
                <Route path="/libraries" component={ Libraries } />
                <Route path="/home" component= { Home } />
                <Route path="/cafelist" component= { CafeList } />
                <Route path="/current" component={ LocationGetter } />
            </Content>

            <Footer>
              © SF Study Spots. <span style={{fontStyle: "italic"}}>
                Developed by Sagdi Formanov</span>
                <a href="https://www.instagram.com/forsi_ph" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{marginLeft: 10, fontSize: 20}}
                ><Icon type="instagram" /></a>
                <a href="https://www.linkedin.com/in/sagdi-formanov/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{marginLeft: 15, fontSize: 20}}
                ><Icon type="linkedin" /></a>
            </Footer>
          </Layout>
        </Layout>
        </>
      </Switch>
    </div>
  );
}

export default App;