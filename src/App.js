import React from 'react'; 
import './App.css';
import Person from './Person/person';

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
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '2px solid orange',
      borderRadius : '10px',
      padding : '8px',
      cursor: 'pointer',
      
    }
    let persons=null;
    if(this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map( (person,index)=> {
            return (
              <Person 
              key={person.id}
              name={person.name}
              age={person.age}
              click={()=>{this.deletePersonHandler(index)}}
              nameChanger={ (event)=>{this.nameChanger(event,person.id)} }
              />
                  )              
            })
          }
          
        </div>
            
      )
      style.backgroundColor ='brown';
      
    }
     
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }
    
    return (
      
      <div className="App">
        <h1 className={classes.join(" ")}>Boom! You looking for this</h1>
        <button  style={style}  onClick={()=> this.toggelPersonHandler()}>Switch Person</button>
        {persons}
      </div>
      
    )
  }
}

export default App;




  