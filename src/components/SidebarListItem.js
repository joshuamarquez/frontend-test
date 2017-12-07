import React from 'react';
import moment from 'moment';
import '../styles/style.css';
import contactIcon from '../contact.svg';

class SidebarListItem extends React.Component {
    render() {
        let selectedStyle = '';
        let selectedBar;

        if (this.props.isSelected) {
            selectedStyle = 'mail-selected';
            selectedBar = <div className="mail-selected-bar" />;
        }

        return (
            <li>
                {selectedBar}
                <button onClick={() => this.props.onClick(this.props.email.id)}
                        className={selectedStyle}>
                    <img src={contactIcon} alt="spam icon" />
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
                        {`${this.props.email.body.slice(0, 10)}...`}
                    </div>
                </button>
            </li>
        );
    }
}

export default SidebarListItem;
