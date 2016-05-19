require('./style/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';

import StorePicker from './components/store_picker';

const App = () => {

  return (
    <StorePicker />
  )
};

ReactDOM.render(<App />, document.querySelector('.root'));
