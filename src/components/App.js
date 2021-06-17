import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Calc from './Calc';
import Quote from './Quote';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calc" component={Calc} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </main>
  </>
);

export default App;
