import { combineReducers } from 'redux';
import {
    emailRead,
    emailState,
} from './utils';
import {
    MARK_AS_READ,
    MARK_AS_UNREAD,
    TRASH,
    REPORT_SPAM,
    SET_CURRENT_EMAIL,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
} from './actions';
import emailsInitData from './data.json';
const { INBOX } = VisibilityFilters;

function visibilityFilter(state = INBOX, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter;
      default:
        return state;
    }
}

function currentEmail(state = -1, action) {
    switch(action.type) {
        case SET_CURRENT_EMAIL:
            return action.id;
        default:
            return state;
    }
}

function emails(state = emailsInitData, action) {
    switch(action.type) {
        case MARK_AS_READ:
            return emailRead(state, action.id, true);
        case MARK_AS_UNREAD:
            return emailRead(state, action.id, false);
        case TRASH:
            return emailState(state, action.id, 'TRASH');
        case REPORT_SPAM:
            return emailState(state, action.id, 'SPAM');
        default:
            return state;
    }
}

const emailApp = combineReducers({
    visibilityFilter,
    currentEmail,
    emails,
});

export default emailApp;