import { connect } from 'react-redux';
import {
    markAsRead,
    setCurrentEmail,
    setVisibilityFilter,
} from '../actions';
import { getEmailById } from '../utils';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => {
    return {
        emails: state.emails,
        currentEmail: getEmailById(state.emails, state.currentEmail),
        visibilityFilter: state.visibilityFilter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEmailClick: id => {
            dispatch(markAsRead(id));
            dispatch(setCurrentEmail(id));
        },
        onEmailFilterClick: filter => {
            dispatch(setVisibilityFilter(filter));
        }
    };
};

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sidebar);

export default SidebarContainer;