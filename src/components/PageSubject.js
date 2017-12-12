import React from 'react';
import '../styles/style.css';
import UnreadIcon from '../icons/Unread'
import TrashIcon from '../icons/Trash'
import SpamIcon from '../icons/Spam'

class PageSubject extends React.Component {
    render() {
        const id = this.props.email.id;

        return (
            <div className="page-subject">
                {this.props.email.subject}
                <div className="page-actions">
                    <button onClick={() => this.props.emailAction('UNREAD', id)}>
                        <UnreadIcon width="19" height="19" fill="#B5B5B5" />
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
                    {
                        this.props.email.state !== 'SPAM'
                        ? (
                            <button onClick={() => this.props.emailAction('SPAM', id)}>
                                <SpamIcon width="19" height="19" fill="#B5B5B5"  />
                            </button>
                        )
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default PageSubject;