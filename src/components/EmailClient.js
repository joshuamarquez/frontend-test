import React from 'react';
import Sidebar from './Sidebar';
import PageContent from './PageContent';
import emailList from '../data.json';

class EmailClient extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentEmail: {},
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const emailFound = emailList.find(email => email.id === id);

    if (emailFound) {
      this.setState({
        currentEmail: emailFound,
      });
    }
  }

  render() {
    return (
      <div>
        <Sidebar emailList={emailList}
                 onClick={this.handleClick} />
        <PageContent currentEmail={this.state.currentEmail} />
      </div>
    );
  }
}

export default EmailClient;
