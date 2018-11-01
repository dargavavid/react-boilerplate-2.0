import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Set up modal
Modal.setAppElement(document.getElementById('app'));

// Create Redux store
const store = configureStore();

// Create main jsx to render, with a Redux HOC
const jsx = (
  <Provider store={store}>
    <div>
      {/* <AppRouter /> */}
      <h1>Hello</h1>
    </div>
  </Provider>
);

// Render loading page while app is loading, could be an animated component later on
ReactDOM.render(jsx, document.getElementById('app'));