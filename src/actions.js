const randomWords = require('random-words');

export const MARK_AS_READ = 'MARK_AS_READ';
export const MARK_AS_UNREAD = 'MARK_AS_UNREAD';
export const TRASH = 'TRASH';
export const REPORT_SPAM = 'REPORT_SPAM';
export const SET_CURRENT_EMAIL = 'SET_CURRENT_EMAIL';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';

export const VisibilityFilters = {
    INBOX: 'INBOX',
    TRASH: 'TRASH',
    SPAM: 'SPAM',
};

export function markAsRead(id) {
    return {
        type: MARK_AS_READ,
        id,
    };
}

export function markAsUnread(id) {
    return {
        type: MARK_AS_UNREAD,
        id,
    };
}

export function trash(id) {
    return {
        type: TRASH,
        id,
    };
}

export function reportSpam(id) {
    return {
        type: REPORT_SPAM,
        id,
    };
}

export function setCurrentEmail(id) {
    return {
        type: SET_CURRENT_EMAIL,
        id,
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}

export function receiveEmail(email) {
    return {
        type: RECEIVE_EMAIL,
        email,
    };
}

export function getNewEmail() {
    return function (dispatch) {
        setInterval(() => {
            const email = {
                id: Date.now(),
                from: `${randomWords()}@${randomWords()}`,
                to: `${randomWords()}@${randomWords()}`,
                contact: randomWords(),
                subject: randomWords({ min: 2, max: 5 }).join(' '),
                body: randomWords({ min: 20, max: 50 }).join(' '),
                isReaded: false,
                state: 'INBOX',
                date: new Date().toISOString(),
            };

            dispatch(receiveEmail(email));
        }, 90 * 1000);
    };
}