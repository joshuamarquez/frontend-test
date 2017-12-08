import React from 'react';
import '../styles/style.css';

class SidebarHeaderItem extends React.Component {
    render() {
        const selectedClass = this.props.isSelected && 'selected';

        return (
            <button onClick={() => this.props.onclick(this.props.item.id)}
                    className="sidenav-header-item">
                <div>
                    {this.props.item.icon}
                </div>
                <div className={selectedClass || null}>
                    {this.props.item.text}
                </div>
            </button>
        );
    }
}

export default SidebarHeaderItem;