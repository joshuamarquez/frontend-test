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
                    <button>
                        <div className="page-action-unread"></div>
                    </button>
                    <button>
                        <img src={trashIcon} alt="trash icon" />
                    </button>
                    <button>
                        <img src={spamIcon} alt="spam icon" />
                    </button>
                </div>
            </div>
        );
    }
}

export default PageSubject;