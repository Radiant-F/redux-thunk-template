import React from 'react';
import {Navigator} from './routes/Navigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
