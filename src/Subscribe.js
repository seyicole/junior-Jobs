import React, {Component} from 'react';
import Mailchimp from "react-mailchimp-form";
 
// a basic form
class Subscribe extends Component {
  render() {
    return (
        <Mailchimp
        action='https://online.us20.list-manage.com/subscribe/post?u=4f1afcca43ca08b73ec2efa94&amp;id=26984899a7'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
    );
  }
}




export default Subscribe;