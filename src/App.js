import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Default from './components/Default';
import Spot from './components/Spot/Spot';
import Library from './components/old&depricated/Library';
import Home from './components/Home';
import CafeList from './components/RealTimeList/CafeList';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Default }/>
        <Layout>
          <Sider style={{
            overflow: "auto",
            height: "100vh",
            background: "#fff"
          }}>side menu
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