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
        <PageBG email={this.state.currentEmail} />
      </div>
    );
  }
}

export default EmailClient;
