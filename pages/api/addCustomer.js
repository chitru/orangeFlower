import React from 'react';
import axios from 'axios';

class AddCustomer extends React.Component {
    state = {
        fname = '',
        lname = '',
        email = '',
        phone = '',
        companyName = '', 
        message = ''
    };

    handleSubmit = event => {
        event.preventDefault();

        const person = { 
            fname: this.state.name,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone,
            companyName: this.state.companyName,
            message: this.state.message
        }

        axios.post(``, { person })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return(
            <div>
            </div>
        )
    }
}

export default AddCustomer;
