import React from 'react';
import './person.css'
const Person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click} >My name is {props.name} and I'm {props.age}</p>
            <p >{props.children}</p>
            <input onChange={props.nameChanger} defaultValue={props.name} />
        </div>
    )
};
export default Person;