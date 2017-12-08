import React from 'react';
import Sidebar from './Sidebar';
import PageBG from './PageBG';
import emailList from '../data.json';

class EmailClient extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentEmail: null,
      emailList,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  getEmailIndex(id) {
    return emailList.findIndex(email => email.id === id);
  }

  updateEmailStatus(action, index) {
    if (index !== -1) {
      const emailListCopy = [...emailList];
      const emailCopy = emailListCopy[index];
      let currentEmail = null;
      
      switch (action) {
        case 'READ': 
          emailCopy.isReaded = true;
          currentEmail = emailCopy;
          break;

        case 'TRASH': 
          emailCopy.state = 'TRASH';
          break;

        default: ;
      }
      
      this.setState({
        currentEmail,
        emailList: emailListCopy,
      });
    }
  }

  handleClick(id) {
    this.updateEmailStatus('READ', this.getEmailIndex(id));
  }

  handleAction(action, id) {
    this.updateEmailStatus('TRASH', this.getEmailIndex(id));
  }

  render() {
    return (
      <div>
        <Sidebar emailList={emailList}
                 emailSelected={this.state.currentEmail}
                 onClick={this.handleClick} />
        <PageBG email={this.state.currentEmail}
                emailAction={this.handleAction} />
      </div>
    );
  }
}

export default EmailClient;
