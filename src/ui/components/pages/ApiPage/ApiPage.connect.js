import {ApiPage} from './ApiPage';
import {connect} from 'react-redux';

export default connect((state) => ({
    router: state.router
}))(ApiPage)