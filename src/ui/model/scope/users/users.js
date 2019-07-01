import {UsersApiService} from "../../../../api/users";
import Machine from '@qiwi/cyclone';
import {BaseError} from "../../../../error/baseError";

const OK = 'ok';
const LOADING = 'loading';
const INITIAL = 'init';
const LOADING_ERROR = 'loading_error';

const machine = new Machine({
    initialState: INITIAL,
    initialData: {
        usersList: [],
        error: {
            userMessage: ''
        },

    },
    transitions: {
        'init>loading': true,
        'loading>loading_error': (state, res) => res,
        'loading_error>loading': true,
        'loading>ok':(state, res) => res
    }
});

const usersApi = new UsersApiService();

export default {
    state: machine.current(),
    reducers: {
        next(prev, next, ...payload) {
            return machine.next(next, ...payload).current()
        }
    },
    effects: {
        async users() {
            this.next(LOADING);
            try {
                const usersList = await usersApi.users();
                this.next(OK, {
                    usersList
                });
            } catch (err) {
                if (err instanceof BaseError && err.code === BaseError.API_ERROR){
                    this.next(LOADING_ERROR, {error: {...err, userMessage: "Ошибка API"}});
                    return;
                }
                this.next(LOADING_ERROR, {error: {...err, userMessage: "Что-то пошло не так..."}});
            }
        },
    },
    selectors: (slice, createSelector, hasProps) =>({
        isLoading() {
            return slice(users => {
                return users.state === LOADING
            });
        },
        isLoadIn() {
            return slice(users =>{
                return users.state === OK
            })
        },
        isInitial() {
            return slice(users => {
                return users.state === INITIAL
            })
        },
        isLoadingError() {
            return slice(users => {
                return users.state === LOADING_ERROR
            })
        },
        getErrorMessage() {
            return slice(users => {
                return (users.data && users.data.error && users.data.error.userMessage) || undefined;
            })
        },
        getUsersList(){
            return slice(users =>{
                return users.data.usersList;
            })
        }
    })
}