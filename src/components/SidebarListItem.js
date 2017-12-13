import React from 'react';
import moment from 'moment';
import '../styles/style.css';
import ContactIcon from '../icons/Contact';

class SidebarListItem extends React.Component {
    render() {
        let selectedStyle = '';
        let selectedBar;

        if (this.props.isSelected) {
            selectedStyle = 'mail-selected';
            selectedBar = <div className="mail-selected-bar" />;
        }

        let isReadedTag;

        if (!this.props.email.isReaded) {
            isReadedTag = <div className="unread"></div>;
        }

        return (
            <li>
                {selectedBar}
                {isReadedTag}
                <button onClick={() => this.props.onEmailClick(this.props.email.id)}
                        className={selectedStyle}>
                    <ContactIcon width="12" height="12" fill="#333333" />
                    <div className="contact">
                        {this.props.email.contact}
                        <div className="mail-date sub-text">
                            {moment(this.props.email.date).format('MMM DD')}
                        </div>
                    </div>
                    <div className="subject">
                        {this.props.email.subject}
                    </div>
                    <div className="body-desc sub-text">
                        {`${this.props.email.body.slice(0, 40)}...`}
                    </div>
                </button>
            </li>
        );
    }
}

export default SidebarListItem;
