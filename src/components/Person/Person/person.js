import React from 'react';
import classes from './person.css'
const person = (props) => {
    
    return (
        <div className={classes.Person} >
            <p onClick={props.click} >My name is {props.name} and I'm {props.age}</p>
            <input onChange={props.nameChanger} defaultValue={props.name} />
        </div>
    )
};
export default person;