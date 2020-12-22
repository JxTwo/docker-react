import React, { Component, Fragment } from 'react';
import FindingAids from './components/searchResults/findingAids';
import Header from './components/searchResults/Header';
import { Provider } from 'react-redux';
import store from './store';

  class App extends Component {
    render () {
      return (
        <Provider store={store}>
          <Fragment>
            <Header />
            <FindingAids />
          </Fragment>
        </Provider>
      );
    }
  }

  export default App;
