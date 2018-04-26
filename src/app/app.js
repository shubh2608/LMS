import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes'


injectTapEventPlugin();
const renderApp = (appRoutes) => {
  render((

      <Router history={browserHistory}>
        {appRoutes()}
      </Router>),document.getElementById('app')
  )
};

renderApp(routes);
