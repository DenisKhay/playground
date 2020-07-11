import React from 'react';
import './App.scss';
import {
  Router,
  Switch,
  Link,
  Route,
  useHistory,
} from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import { PageNotFound } from './pages/PageNotFound';
import { CountdownSetup } from './design-mockups/countdown';
import history from 'history/browser'

const colors = [
  '#000000',
  '#0000ff',
  '#00ff00',
  '#00ffff',
  '#ff0000',
  '#ff00ff',
  '#ffff00',
  '#ffffff',
]


function App() {
  return (
      <Router history={history} >
          <Switch>
            <Route path='/design-mockups/countdown-setup'>
                <CountdownSetup />
            </Route>
            <Route exact path='/'>
              <MainPage/>
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
            </Switch>
      </Router>
  );
}

export default App;
