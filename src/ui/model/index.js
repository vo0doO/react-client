import {init} from '@rematch/core';
import {logger} from 'redux-logger';
import history from '../../storage/history';
import {routerMiddleware, routerReducer} from './router';
import auth from './scope/auth/auth';
import selectPlugin from '@rematch/select';
import users from './scope/users/users';
import bills from './scope/bills/bills'

const middlewares = [routerMiddleware];
const reducers = {
    router: routerReducer
};

if (process.env.NODE_ENV === 'development' || process.env.DEBUG === true) {
    middlewares.push(logger);
}

const store = init({
    models: {
        auth,
        bills,
        users
    },
    redux: {
        middlewares,
        reducers
    },
    plugins: [selectPlugin()]
});

export const {getState, dispatch, select} = store;
export {history, store};
export default store;
