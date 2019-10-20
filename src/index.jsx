// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
// import configureStore from './store/store';

// import App from './App';

// console.log("hit index.jsx")

// var theStore = configureStore();

// const Root = ({ store }) => (
//     <Provider store={theStore}>
//         <HashRouter>
//             <App />
//         </HashRouter>
//     </Provider>
// );

// export default Root;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore()
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         session: { id: window.currentUser.id },
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }
    const root = document.getElementById('root');
    ReactDOM.render(<App store={store} />, root);
});

export default App;
