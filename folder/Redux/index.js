import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';  // Correct import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// console.log('from index.js')

// store
const BUY_CAKE = 'BUY_CAKE';

// action type
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first redux action'
  };
}

// reducers
// (previousState, action) => newState
const initialState = {
  numofcakes: 20
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofcakes: state.numofcakes - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer); // Correct usage of createStore
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//app.js
//import React from 'react';

//function App() {
//  return (
//    <div>
//      <h1>Redux Example</h1>
 //     {/* Display some UI */}
 //   </div>
 // );
//}

//export default App;
