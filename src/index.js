import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import rootReducer from './reducers';
import App from './Components/App';

const logger=({dispatch,getState})=>(next)=>(action)=>{
  console.log("ACTION TYPE",action.type);
  next(action);
}

const store=createStore(rootReducer,applyMiddleware(logger));

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
