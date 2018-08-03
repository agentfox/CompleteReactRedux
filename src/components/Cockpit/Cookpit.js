import React from 'react'; 
import classes from './Cookpit.css'

const Cookpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    
    if(props.showPerson) {
        btnClass= classes.red;
          
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
      
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cookpit}>
            <h1 
                className={assignedClasses.join(" ")}
                >MY REACT</h1>
            <button 
                className={btnClass}  
                onClick={()=> props.toggle()}
                >Switch Person</button>
        </div>
    );
}
export default Cookpit ;