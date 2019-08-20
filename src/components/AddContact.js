import React, { Component } from 'react';

class AddContact extends Component {


    componentWillMount = () => {
        this.setState({
            name: "",
            email: "",
            phone: "",
        }
        );
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);
    }
    handleChange = (input) => {
        this.state[input.target.name] = input.target.value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
              <div>Name: <input onChange={this.handleChange} name="name" type="name"/>  </div>   
              <div>Email: <input onChange={this.handleChange} name="email" type="email"/>  </div>   
              <div>Phone: <input onChange={this.handleChange} name="phone" type="name"/>  </div>  
              <button >Add</button> 
                </form>
            </div>
        );
    }
}

export default AddContact;