import React, { Component } from 'react';

class ShowContact extends Component {
    
    
    render() {
        

    
        return (
            <ul>
          { this.props.persons.map(person => <li>
              
            Name: {person.name} Email: {person.email} Phone: {person.phone} 
           <div>

           <button onClick={this.props.deletePerson}>Delete</button>
           </div> </li>)} 
      </ul>
        );
    }
}

export default ShowContact;