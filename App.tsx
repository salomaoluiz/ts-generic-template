

import React, { Component } from "react";

import { Provider } from "react-redux";
import configureStore from "./src/config/store";

interface Props {}
export default class App extends Component<Props> {
  render() {
    const { NavigationRedux, store } = configureStore();
    return (
      <Provider store={store}>
        <NavigationRedux />
      </Provider>
    );
  }
}
