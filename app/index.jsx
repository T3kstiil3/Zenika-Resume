import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, HashRouter } from 'react-router-dom';
import { EventEmitter } from 'events';
import localforage from 'localforage';

import Store from './Store';
import Controller from './Controller';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Page404 from './components/404.jsx';

const appElement = document.getElementById('app');
const appVersion = appElement.getAttribute('data-app-version');
const apiEndpoint = appElement.getAttribute('data-api-endpoint');

const events = new EventEmitter();
const store = new Store('documents', events, apiEndpoint, localforage);
const controller = new Controller({ store }, events);

require('offline-plugin/runtime').install();

if ((window.location.href + '').indexOf('?help') != -1) {
  history.replaceState(null, 'zenika-resume', (window.location.href + '').split('?help')[0]);
}

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/app' component={() => <App version={appVersion} controller={controller} />} />
      <Route exact path='/' component={Home} />
      <Route exact path='/404' component={Page404} />
    </div>
  </HashRouter>,
  appElement
);
