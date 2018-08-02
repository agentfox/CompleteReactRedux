import React from 'react'; //<button style={style} onClick={this.switchNameHandler.bind(this,"Green-Latern")}>Switch</button>
import './App.css';
import Person from './Person/person'
class App extends React.Component {

  state = {
    persons : [
      {name:"SuperMan",age:"200"},
      {name:"SuperGirl",age:"250"},
      {name:"BatMan",age:"50"}
    ],
    otherState : "value",
    showPerson : false
  }

  

  switchNameHandler = (newName) => {
    this.setState ({
      persons : [
        {name:newName,age:"200"},
        {name:"Wonder-Woman",age:"250"},
        {name:"Bat-Man",age:"50"}
      ],
      otherState : "value"
    })
  }

  nameChanger = (event) => {
    this.setState ({
      persons : [
        {name:"Super-Man",age:"200"},
        {name:event.target.value,age:"250"},
        {name:"Bat-Man",age:"50"}
      ],
      otherState : "value"
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
        <div >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={()=>this.switchNameHandler('Dark-Seid')}
            nameChanger={this.nameChanger}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} 
          >This is the props.children</Person>
        </div>  
      )
    }
    
    return (
      <div className="App">
        <h1>Boom! You looking for this</h1>
        <button  onClick={()=> this.toggelPersonHandler()}>Switch</button>
        {persons}
      </div>
    )
  }
}

export default App;




  /* constructor(props) {
    super(props)

    this.state = {
      persons : [
        {name:"SuperMan",age:"200"},
        {name:"SuperGirl",age:"250"},
        {name:"BatMan",age:"50"}
      ],
      otherState : "value"
    }
  } */

  /* const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '2px solid orange',
      borderRadius : '10px',
      padding : '8px',
      cursor: 'pointer'
    } */