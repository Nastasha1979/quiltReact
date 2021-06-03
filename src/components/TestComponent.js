


import React, {Component} from "react";
import { Button } from "reactstrap";
import ContactModal from "./ContactModalComponent";


class TodoList extends Component {
  constructor(props) {
    super(props);
    
  }

  loginModalRef = ({toggleContact}) => {
      this.toggleContact = toggleContact;
  }
  
  onLoginClick = () => {
      this.toggleContact();
  }

 

  render() {
    return (
      <div >
        <ContactModal ref={this.loginModalRef}></ContactModal>
          <Button onClick={this.onLoginClick}>Open Contact Modal</Button>
      </div>
    );
  }
}

  export default TodoList;