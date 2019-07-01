import {UsersListPage} from './UsersListPage';
import {connect} from 'react-redux';
import {select} from '../../../model';

export default connect((state) => ({
    isInitial: select.users.isInitial(state),
    isLoading: select.users.isLoading(state),
    isLoadIn: select.users.isLoadIn(state),
    isLoadingError: select.users.isLoadingError(state),
    errorMessage: select.users.getErrorMessage(state),
    usersList: select.users.getUsersList(state),
}), ({users: {users}}) => ({users}))(UsersListPage);