import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout } from 'antd';

import Default from './components/Default';
import Spot from './components/Spot/Spot';
import Library from './components/old&depricated/Library';
import Home from './components/Home';
import CafeList from './components/RealTimeList/CafeList';
import Logo from './components/images/SFspotsLogodark.png';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    
    <div className="App">
      <Route exact path="/" component={ Default }/>
      <Switch>
        <Layout>

          <Sider style={{
            overflow: "auto",
            height: "100vh",
            background: "#fff"
          }}>

            {/* Top logo image */}
            <div className="logoImage">
              <Link to="/home">
                <img src={ Logo } alt="logo" style={{ width: "180px" }} />
              </Link>
            </div>

            {/* Side Navigation: */}
            <div className="sideNavContent">
              <p>Show by:</p> 

              <Link to="/cafelist">
                <p>Location</p>
              </Link>

              <Link to="/home">
                <p>My preference</p>
              </Link>
            </div>

          </Sider>

          <Layout>
            <Header style={{
              background: "#fff"
            }}>Header</Header>
            <Content>
              
              <Route path="/spot" component={ Spot } />
              <Route path="/library" component={ Library } />
              <Route path="/home" component= { Home } />
              <Route path="/cafelist" component= { CafeList } />
              {/* <Route path="/mapsview" component={ MapsView } /> */}
    
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;