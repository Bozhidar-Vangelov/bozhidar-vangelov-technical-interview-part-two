import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { users } from './features/users.js';
import { posts } from './features/posts.js';

const store = configureStore({
  reducer: {
    [users.reducerPath]: users.reducer,
    [posts.reducerPath]: posts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([users.middleware, posts.middleware]),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
