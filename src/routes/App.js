import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

//Layouts
import LayoutDS from '../layouts/LayoutDS'
import LayoutWS from '../layouts/LayoutWS'
import AppRoute from '../layouts/AppRoute';

// Containers
import Home from '../containers/Home';
import Astheroids from '../containers/Astheroids';
import HomeDS from '../containers/HomeDS';
import Atoms from '../containers/Atoms';
import Molecules from '../containers/Molecules';
import Organisms from '../containers/Organisms';
import AstheroidDetail from '../containers/AstheroidDetail';
import Gallery from '../containers/Gallery';

const App = () => {
  return (
    <>
      <Router history={createBrowserHistory()}>
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutWS} />
          <AppRoute exact path="/gallery" component={Gallery} layout={LayoutWS} />
          <AppRoute exact path="/astheroids" component={Astheroids} layout={LayoutWS} />
          <AppRoute exact path="/astheroids/:id" component={AstheroidDetail} layout={LayoutWS} />
          <AppRoute exact path='/ds' component={HomeDS} layout={LayoutDS} />
          <AppRoute path='/ds/atoms' component={Atoms} layout={LayoutDS} />
          <AppRoute path='/ds/molecules' component={Molecules} layout={LayoutDS} />
          <AppRoute path='/ds/organisms'  component={Organisms} layout={LayoutDS} />
        </Switch>
      </Router>
    </>
  )
}

export default App;