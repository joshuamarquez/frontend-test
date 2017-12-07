import React from 'react';
import SidebarList from './SidebarList';
import '../styles/style.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <SidebarList emailList={this.props.emailList}
                             emailSelected={this.props.emailSelected}
                             onClick={this.props.onClick} />
            </div>
        );
    }
}

export default Sidebar;
