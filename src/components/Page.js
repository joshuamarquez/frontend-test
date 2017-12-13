import React from 'react';
import PageSubject from '../containers/PageSubject';
import PageContent from './PageContent';
import '../styles/style.css';
import emailIcon from '../icons/email.svg';

class Page extends React.Component {
    render() {
        let content;

        if (!this.props.currentEmail) { 
            content = <img className="page-empty" src={emailIcon} alt="email icon" />
        } else {
            content = (
                <div>
                    <PageSubject />
                    <PageContent email={this.props.currentEmail} />
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

export default Page;