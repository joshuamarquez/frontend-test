import React from 'react';
import SidebarHeaderItem from './SidebarHeaderItem';
import InboxIcon from '../icons/Inbox';
import TrashIcon from '../icons/Trash';
import SpamIcon from '../icons/Spam';
import '../styles/style.css';

class SidebarHeader extends React.Component {

    getIcon(type, isSelected) {
        let icon;
        let fill = isSelected ? '#4990E2' : '#333333';

        switch (type) {
            case 'Inbox':
                icon = <InboxIcon width="12" height="12" fill={fill} />;
                break;

            case 'Trash':
                icon = <TrashIcon width="12" height="12" fill={fill} />;
                break;

            case 'Spam':
                icon = <SpamIcon width="12" height="12" fill={fill} />;
                break;

            default: ;
        }

        return icon;
    }

    render() {
        const items = [
            { id: 'SPAM', text: 'Spam' },
            { id: 'TRASH', text: 'Trash' },
            { id: 'INBOX', text: 'Inbox' },
        ];

        return (
            <div className="sidenav-header">
                {items.map((item, index) => {
                    const isSelected = item.id === this.props.visibilityFilter;
                    item.icon = this.getIcon(item.text, isSelected);

                    return <SidebarHeaderItem key={item.id}
                                              item={item}
                                              isSelected={isSelected}
                                              onclick={this.props.onEmailFilterClick} />;
                })}
            </div>
        );
    }
}

export default SidebarHeader;
