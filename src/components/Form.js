import React from 'react';
import { Input, Button } from 'semantic-ui-react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        education: ''
    }

    change = ({ target: {name, value}}) => {
        this.setState({
          [name]: value
        });
    };

    onSumbit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <Input 
                  name='firstName'
                  placeholder="First Name" 
                  value={this.state.firstName} 
                  onChange={this.change}
                />

                <Input 
                  name='lastName'
                  placeholder="Last Name" 
                  value={this.state.lastName} 
                  onChange={this.change}
                />

                <Input
                  name='email'
                  placeholder="Email" 
                  value={this.state.email} 
                  onChange={this.change}
                />

                <Input 
                  name='city'
                  placeholder="City" 
                  value={this.state.city} 
                  onChange={this.change}
                />

                <Input 
                  name="education"
                  placeholder="Education" 
                  value={this.state.education} 
                  onChange={this.change}
                />
                
                <Button className="button" onClick={this.onSumbit}>Sumbit</Button>
            </form>   
        )
    }
}