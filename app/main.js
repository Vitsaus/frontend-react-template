import './main.css';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from './components/Layout.js';
import HelloA from './components/HelloA.js';
import HelloB from './components/HelloB.js';
import HelloC from './components/HelloC.js';

import app from './reducers.js';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <MultipleMonitors>
          <LogMonitor theme="tomorrow" preserveScrollTop={false} />
          <Dispatcher theme="tomorrow" />
      </MultipleMonitors>
  </DockMonitor>
);

let store = createStore(
    app,
    DevTools.instrument()
);

const history = syncHistoryWithStore(browserHistory, store);

console.log('initial state', store.getState());

store.subscribe(() => {
    console.log('state changed', store.getState());
});

history.listen((location) => {
    console.log('location changed', location);
});

ReactDom.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={HelloA}/>
                    <Route path="foo" component={HelloB}/>
                    <Route path="bar" component={HelloC}/>
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('app')
);
