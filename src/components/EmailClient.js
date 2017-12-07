import React from 'react';
import Sidebar from './Sidebar';
import PageContent from './PageContent';
import emailList from '../data.json';

class EmailClient extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentEmail: {},
      emailList,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const emailIndex = emailList.findIndex(email => email.id === id);

    if (emailIndex !== -1) {
      const emailListCopy = [...emailList];
      const emailCopy = emailListCopy[emailIndex];
      
      emailCopy.isReaded = true;
      
      this.setState({
        currentEmail: emailCopy,
        emailList: emailListCopy,
      });
    }
  }

  render() {
    return (
      <div>
        <Sidebar emailList={emailList}
                 emailSelected={this.state.currentEmail}
                 onClick={this.handleClick} />
        <PageContent email={this.state.currentEmail} />
      </div>
    );
  }
}

export default EmailClient;
