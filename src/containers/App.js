import React from 'react'; 
import classes from './App.css';
import Persons from '../components/Person/Persons';
import Cookpit from '../components/Cockpit/Cookpit'; 

class App extends React.Component {

  state = {
    persons : [
      {id:'d7g82',name:"SuperMan",age:"200"},
      {id:'2jd89',name:"SuperGirl",age:"250"},
      {id:'2d73g',name:"BatMan",age:"50"}
    ],
    otherState : "value",
    showPerson : false
  }


  deletePersonHandler = (personId) => {  
    const  persons =[...this.state.persons];
    // variable persons shouldn't refer to the object persons in the state
    // because when make change to the var person the obj person change along as well
    // which causing change state -> re render so we use slice() to create a copy of
    // object person in the state or you can use ES6 like above code
    persons.splice(personId,1);                  
    this.setState({ persons: persons })            
  }



  nameChanger = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id ===id;
    });
    const theperson = { ...this.state.persons[personIndex] }; // to not refer to origin   
    theperson.name = event.target.value;  //update theperson
    const newPersonState = [...this.state.persons];  // to not refer to origin
    newPersonState[personIndex] = theperson; //update array newpersons

    this.setState({
      persons : newPersonState
    })
  }

  toggelPersonHandler = () => {
    this.setState ({
      showPerson : !this.state.showPerson     
    })
  }
  

  render() {
    
    let persons=null;
    
    if(this.state.showPerson) {
      persons = (
        <div>
            <Persons 
            persons = {this.state.persons}
            click={this.deletePersonHandler}
            nameChanger={this.nameChanger} 
            /> 
        </div>   
      )
     
    }
     
    return (
      
      <div className={classes.App}>
        <Cookpit 
        persons={this.state.persons}
        toggle={this.toggelPersonHandler}
        showPerson={this.state.showPerson}
        />
        {persons}
      </div>
      
    )
  }
}

export default App;




  