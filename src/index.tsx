import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { AppStore } from './stores/AppStore';

import { View } from './components/View';

configure({enforceActions: 'always'});

const appStore = new AppStore();

ReactDOM.render(
  <React.StrictMode>
    <View
      store={appStore} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
