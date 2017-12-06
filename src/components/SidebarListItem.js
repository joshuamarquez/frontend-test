import React from 'react';
import '../styles/style.css';

class SidebarListItem extends React.Component {
    render() {
        return (
            <li>
                <button onClick={() => this.props.onClick(this.props.email.id)}>
                    <div className="contact">
                        {this.props.email.from}
                    </div>
                    <div className="subject">
                        {this.props.email.subject}
                    </div>
                    <div className="body-desc">
                        {`${this.props.email.body.slice(0, 10)}...`}
                    </div>
                </button>
            </li>
        );
    }
}

export default SidebarListItem;
