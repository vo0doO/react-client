import {BillsApiService} from "../../../../api/bills";
import Machine from "@qiwi/cyclone";
import {BaseError} from "../../../../error/baseError";


// action types
const OK = 'ok';
const BILLS_SUBMITING = 'bills_submiting';
const INITIAL = 'init';
const BILLS_ERROR = 'bills_error';

// actionCreator
const machine = new Machine({
    initialState: INITIAL,
    initialData: {
        bills: [],
        error: {
            userMessage: ''
        },

    },
    transitions: {
        'init>bills_submiting': true,
        'bills_submiting>ok': (state, res) => res,
        'bills_submiting>bills_error>': (state, res) => res,
        'bills_error>bills_submiting': true
    }
});

// api handle
const billsApi = new BillsApiService();

// reducer
export default {

    state: machine.current(),

    reducers: {
        next(prev, next, ...payload) {
            return machine.next(next, ...payload).current()
        }
    },

    effects: {
        async getBills() {
            this.next(BILLS_SUBMITING);
            try {
                const billsList = await billsApi.bills()
                    .then((response)=>{
                        return response
                    });
                this.next(OK, {
                    billsList
                });
            } catch (err) {
                if (err instanceof BaseError && err.code === BaseError.API_ERROR){
                    this.next(BILLS_ERROR, {error: {...err, userMessage: "Ошибка API"}});
                    return;
                }
                this.next(BILLS_ERROR, {error: {...err, userMessage: "Что-то пошло не так..."}});
            }
        },
    },

    selectors: (slice, createSelectors, hasProps) => ({
        isSubmiting() {
            return slice(bills => {
                return bills.state === BILLS_SUBMITING
            });
        },
        isOk() {
            return slice(bills=>{
                return bills.state === OK;
            })
        },
        isInitial() {
            return slice(bills =>{
                return bills.state === INITIAL;
            });
        },
        isBillsError() {
            return slice(bills => {
                return bills.state === BILLS_ERROR;
            });
        },
        getErrorMessage() {
            return slice(bills=>{
                return (bills.data && bills.data.error && bills.data.error.userMessage) || undefined;
            })
        },
        getBillsList() {
            return slice(bills=>{
                return bills.data.billsList;
            })
        }
    })
}