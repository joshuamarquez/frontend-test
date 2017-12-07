import React from 'react';
import '../styles/style.css';
import trashIcon from '../icons/trash.svg'
import spamIcon from '../icons/spam.svg'

class PageSubject extends React.Component {
    render() {
        return (
            <div className="page-subject">
                {this.props.email.subject}
                <div className="page-actions">
                    <div className="page-action-unread"></div>
                    <img src={trashIcon} alt="trash icon" />
                    <img src={spamIcon} alt="spam icon" />
                </div>
            </div>
        );
    }
}

export default PageSubject;