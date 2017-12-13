import React from 'react';
import SidebarListItem from './SidebarListItem';
import '../styles/style.css';

class SidebarList extends React.Component {
    render() {
        const emails = this.props.emails.map((email) => {
            let isSelected = false;
            const currentEmail = this.props.currentEmail;

            if (currentEmail && currentEmail.id === email.id) {
                isSelected = true;
            }

            if (email.state !== this.props.visibilityFilter) {
                return null;
            }

            return <SidebarListItem key={email.id}
                                    onEmailClick={this.props.onEmailClick}
                                    isSelected={isSelected}
                                    email={email} />
        })

        // Remove null items
        .filter(i => i !== null);

        return (
            emails.length > 0
            ?
            <ul>
                {emails}
            </ul>
            :
            <div className="sidenav-list-empty">Empty</div>
        );
    }
}

export default SidebarList;
