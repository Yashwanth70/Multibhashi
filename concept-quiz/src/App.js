import React, { Component } from 'react';
import './App.css';
import Questions from './questions';

var questionList=["What is the name of the city in below pic?",
"Where does Multibhashi located at?",
"Do you think Multibhashi will select you? (Hint:Yes)"];
var sideBarList=['Concept A','Concept B'];

//JS File for passing questions list in Concept A and Sidebar Contents

class App extends Component {
  constructor(){
    super();
  }
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Concept Quiz A</h2>
        </div>
       <Questions sidebar={sideBarList} questions={questionList}/>
      </div>
    );
  }
}

export default App;
//JS File for Concept A Quiz