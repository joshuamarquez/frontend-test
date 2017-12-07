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

            if (item.trash) {
                return null;
            }

            return <SidebarListItem key={item.id}
                                    onClick={this.props.onClick}
                                    isSelected={isSelected}
                                    email={item} />
        });

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default SidebarList;
