import { createStore } from 'redux';
import rootReducer from './root-reduer'; // Ensure this path is correct

const store = createStore(
    rootReducer,
    // typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default store;