export function updateEmailAttr(emails, id, attr) {
    return emails.map((email) => {
        if (email.id === id) {
            return Object.assign({}, email, attr);
        }

        return email;
    });
}

export function emailRead(emails, id, isReaded) {
    return updateEmailAttr(emails, id, { isReaded });
}

export function emailState(emails, id, state) {
    return updateEmailAttr(emails, id, { state });
}

export function getEmailById(emails, id) {
    return emails.find(email => email.id === id);
}