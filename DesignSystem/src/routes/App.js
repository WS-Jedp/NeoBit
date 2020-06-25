import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layouts
import Home from '../layouts/Home';

const App = () => {
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
}

export default App;