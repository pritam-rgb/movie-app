import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import movies from './reducers';
import App from './Components/App';


const store=createStore(movies);

// console.log("store",store);
// console.log("Before State",store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"Superman"}]
// });
// console.log("After State",store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
