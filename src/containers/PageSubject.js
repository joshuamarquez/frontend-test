import { connect } from 'react-redux';
import {
    markAsUnread,
    setCurrentEmail,
    trash,
    reportSpam,
} from '../actions';
import { getEmailById } from '../utils';
import PageSubject from '../components/PageSubject';

const mapStateToProps = state => {
    return {
        email: getEmailById(state.emails, state.currentEmail),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        markAsUnread: id => {
            dispatch(markAsUnread(id));
            dispatch(setCurrentEmail(-1));
        },
        trash: id => {
            dispatch(trash(id));
            dispatch(setCurrentEmail(-1));
        },
        reportSpam: id => {
            dispatch(reportSpam(id));
            dispatch(setCurrentEmail(-1));
        },        
    };
};

const PageSubjectContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageSubject);

export default PageSubjectContainer;