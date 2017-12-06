import React from 'react';
import SidebarListItem from './SidebarListItem';
import '../styles/style.css';

class SidebarList extends React.Component {
    render() {
        const list = this.props.emailList.map(item => 
            <SidebarListItem key={item.id}
                             onClick={this.props.onClick}
                             email={item} />
        );

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default SidebarList;
