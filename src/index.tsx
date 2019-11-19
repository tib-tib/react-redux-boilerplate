import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from "./store";

import { HomePage } from './components/pages/HomePage';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

render(
    <App />,
    document.getElementById("app"),
);
