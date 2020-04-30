// import { applyMiddleware, compose } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { createEpicMiddleware } from 'redux-observable';
// import { rootEpic } from './epics';
// import rootReducer from './reducers'

// const epicMiddleware = createEpicMiddleware();
// export default configureStore({ reducer: rootReducer, middleware: compose(applyMiddleware(epicMiddleware)) })
// epicMiddleware.run(rootEpic);
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);