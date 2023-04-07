import {createStore, applyMiddleware, compose} from "redux";
//                   Mejoramos la Store
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk"; //Implenta acciones asíncronas en Redux

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;