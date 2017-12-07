import React from 'react';
import moment from 'moment';
import '../styles/style.css';

class SidebarListItem extends React.Component {
    render() {
        let selectedStyle = '';

        if (this.props.isSelected) {
            selectedStyle = 'mail-selected';
        }

        return (
            <li>
                <button onClick={() => this.props.onClick(this.props.email.id)}
                        className={selectedStyle}>
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
