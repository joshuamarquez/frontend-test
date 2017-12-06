import React from 'react';
import '../styles/style.css';
import trashIcon from '../trash.svg'
import spamIcon from '../spam.svg'

class PageContent extends React.Component {
    render() {
        const emailDate = new Date(this.props.email.date).toString();

        return (
            <div className="page-bg">
                <div className="page-subject">
                    {this.props.email.subject}
                    <div className="page-actions">
                        <div className="page-action-unread"></div>
                        <img src={trashIcon} alt="trash icon" />
                        <img src={spamIcon} alt="spam icon" />
                    </div>
                </div>
                <div className="page-content">
                    <div className="page-contact">
                        {this.props.email.contact}
                        <div className="page-from"> {`<${this.props.email.from}>`}</div>
                        <div className="page-date">{emailDate}</div>
                    </div>                
                    {this.props.email.body}
                </div>
            </div>
        );
    }
}

export default PageContent;