import React from 'react';
import '../styles/style.css';
import trashIcon from '../icons/trash.svg'
import spamIcon from '../icons/spam.svg'

class PageSubject extends React.Component {
    render() {
        const id = this.props.email.id;

        return (
            <div className="page-subject">
                {this.props.email.subject}
                <div className="page-actions">
                    <button>
                        <div className="page-action-unread"></div>
                    </button>
                    {
                        this.props.email.state !== 'TRASH'
                        ? (
                            <button onClick={() => this.props.emailAction('TRASH', id)}>
                                <img src={trashIcon} alt="trash icon" />
                            </button>
                        )
                        : null
                    }
                    <button>
                        <img src={spamIcon} alt="spam icon" />
                    </button>
                </div>
            </div>
        );
    }
}

export default PageSubject;