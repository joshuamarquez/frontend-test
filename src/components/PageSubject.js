import React from 'react';
import '../styles/style.css';
import TrashIcon from '../icons/Trash'
import SpamIcon from '../icons/Spam'

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
                                <TrashIcon width="19" height="19" fill="#B5B5B5" />
                            </button>
                        )
                        : null
                    }
                    <button>
                        <SpamIcon width="19" height="19" fill="#B5B5B5"  />
                    </button>
                </div>
            </div>
        );
    }
}

export default PageSubject;