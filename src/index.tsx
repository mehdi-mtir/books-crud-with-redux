import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {Store, createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducers/reducer';
import thunk from 'redux-thunk';
import { Provider } from "react-redux"

const store: Store<BookState, BookAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


