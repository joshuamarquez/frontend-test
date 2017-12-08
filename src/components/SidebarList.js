import React from 'react';
import SidebarListItem from './SidebarListItem';
import '../styles/style.css';

class SidebarList extends React.Component {
    render() {
        const list = this.props.emailList.map((item) => {
            let isSelected = false;
            const emailSelected = this.props.emailSelected;

            if (emailSelected && emailSelected.id === item.id) {
                isSelected = true;
            }

            if (item.state !== this.props.currentState) {
                return null;
            }

            return <SidebarListItem key={item.id}
                                    onClick={this.props.onClick}
                                    isSelected={isSelected}
                                    email={item} />
        })

        // Remove null items
        .filter(i => i !== null);

        return (
            list.length > 0
            ?
            <ul>
                {list}
            </ul>
            :
            <div className="sidenav-list-empty">Empty</div>
        );
    }
}

export default SidebarList;
