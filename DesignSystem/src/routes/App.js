import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Layouts
import Layout from '../layouts/Layout'

// Components
import Home from '../containers/Home';
import Atoms from '../containers/Atoms';
import Molecules from '../containers/Molecules';
import Organisms from '../containers/Organisms';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/atoms' component={Atoms} />
          <Route exact path='/molecules' component={Molecules} />
          <Route exact path='/organisms' component={Organisms} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;