require('./style/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Order from './components/order';
import Inventory from './components/inventory';
import StorePicker from './components/store_picker';

const App = () => {

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header />
      </div>
      <Order />
      <Inventory />
    </div>

  )
};

ReactDOM.render(<App />, document.querySelector('.root'));
