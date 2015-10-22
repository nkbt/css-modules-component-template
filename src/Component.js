import React from 'react';
import css from './Component.css';


const Component = React.createClass({
  render() {
    return <div className={css.component}>Component</div>;
  }
});


Component.css = css;


export default Component;
