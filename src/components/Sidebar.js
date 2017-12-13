import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList';
import '../styles/style.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <SidebarHeader visibilityFilter={this.props.visibilityFilter}
                               onEmailFilterClick={this.props.onEmailFilterClick} />
                <SidebarList emails={this.props.emails}
                             currentEmail={this.props.currentEmail}
                             visibilityFilter={this.props.visibilityFilter}
                             onEmailClick={this.props.onEmailClick} />
            </div>
        );
    }
}

export default Sidebar;
