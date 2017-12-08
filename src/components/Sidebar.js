import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList';
import '../styles/style.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 'SPAM',
                    text: 'Spam',
                },
                {
                    id: 'TRASH',
                    text: 'Trash',
                },
                {
                    id: 'INBOX',
                    text: 'Inbox',
                },
            ],
            itemSelected: 'INBOX'
        };

        this.handleSidebarHeaderClick = this.handleSidebarHeaderClick.bind(this);
    }

    handleSidebarHeaderClick(id) {
        this.setState({
            itemSelected: id,
        });
    }

    render() {
        return (
            <div className="sidenav">
                <SidebarHeader items={this.state.items}
                               itemSelected={this.state.itemSelected}
                               onclick={this.handleSidebarHeaderClick} />
                <SidebarList emailList={this.props.emailList}
                             emailSelected={this.props.emailSelected}
                             currentState={this.state.itemSelected}
                             onClick={this.props.onClick} />
            </div>
        );
    }
}

export default Sidebar;
