import {BillsListPage} from './BillsListPage';
import {connect} from 'react-redux';
import {select} from '../../../model';

export default connect((state) => ({
    isInitial: select.bills.isInitial(state),
    isSubmiting: select.bills.isSubmiting(state),
    isOk: select.bills.isOk(state),
    billsList: select.bills.getBillsList(state),
    router: state.router
}), (dispatch) => {
    return {
        getBills: dispatch.bills.getBills()
    }
})(BillsListPage);