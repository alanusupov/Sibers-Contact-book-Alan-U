import React, { Component } from 'react';

class ShowContact extends Component {
    
    
    render() {
        

    
        return (
            <ul>
          { this.props.persons.map(person => <li>
              
            {person.name}and {person.email} and {person.phone} 
           <div>

           <button onClick={this.props.deletePerson}>Delete</button>
           </div> </li>)} 
      </ul>
        );
    }
}

export default ShowContact;