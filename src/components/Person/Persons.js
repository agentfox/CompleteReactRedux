import React from 'react';
import Person from './Person/person';
const Persons = (props) => {
    
    return (
        
        props.persons.map( (person,index)=> {
            return (
              <Person 
                key={person.id}
                name={person.name}
                age={person.age}
                click={()=>{props.click(index)}}
                nameChanger={ (event)=>{props.nameChanger(event,person.id)} }
              />
                )              
        })
    )
};
export default Persons;