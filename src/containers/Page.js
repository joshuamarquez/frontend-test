import { connect } from 'react-redux';
import { getEmailById } from '../utils';
import Page from '../components/Page';

const mapStateToProps = state => {
    return {
        currentEmail: getEmailById(state.emails, state.currentEmail),
    };
};

const PageContainer = connect(
    mapStateToProps,
)(Page);

export default PageContainer;