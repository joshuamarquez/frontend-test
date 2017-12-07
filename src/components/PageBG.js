import React from 'react';
import PageSubject from './PageSubject';
import PageContent from './PageContent';
import '../styles/style.css';
import emailIcon from '../icons/email.svg';

class PageBG extends React.Component {
    render() {
        let content;

        if (!this.props.email) { 
            content = <img className="page-empty" src={emailIcon} alt="email icon" />
        } else {
            content = (
                <div>
                    <PageSubject email={this.props.email}
                                 emailAction={this.props.emailAction} />
                    <PageContent email={this.props.email} />
                </div>
            );
        }

        return (
            <div className="page-bg">
                {content}
            </div>
        );
    }
}

export default PageBG;