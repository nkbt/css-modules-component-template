import React from 'react';
import Component from '..';
import css from './App.css';


Component.css.component = `${Component.css.component} ${css.myComponent}`;


const App = React.createClass({
  render() {
    return (
      <div>
        <Component />
      </div>
    );
  }
});


export default App;
