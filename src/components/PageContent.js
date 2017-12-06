import React from 'react';
import '../styles/style.css';

class PageContent extends React.Component {
    render() {
        return (
            <div className="page-content">{this.props.currentEmail.body}</div>
        );
    }
}

export default PageContent;