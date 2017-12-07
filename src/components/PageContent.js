import React from 'react';
import moment from 'moment';
import '../styles/style.css';

class PageContent extends React.Component {
    render() {
        const m = moment(this.props.email.date);
        const emailDate = m.format('dddd, MMM DD, HH:mm A');

        return (
            <div className="page-content">
                <div className="page-contact">
                    {this.props.email.contact}
                    <div className="page-from"> {`<${this.props.email.from}>`}</div>
                    <div className="page-date">{emailDate}</div>
                </div>
                {this.props.email.body}
            </div>
        );
    }
}

export default PageContent;