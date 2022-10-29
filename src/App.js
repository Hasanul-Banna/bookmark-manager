import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import './App.scss';
import Layout from './Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' >
            <Redirect to='/Home' />
          </Route>
          <Route exact path="/Home" >
            <Home />
          </Route>
          <Route path='*'>
            {/* <NotFound /> */}
            <section>NotFound</section>
          </Route>
        </Switch>
      </Layout>
    </Router>

  );
};

export default App;
