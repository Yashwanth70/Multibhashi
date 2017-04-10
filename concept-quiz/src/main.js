import React, { Component } from 'react';
import QuestionsB from './questionsB';

var sideBarList=['Concept A','Concept B'];
var questionList=["What is your College name? (Hint:IIITM)",
                   "Where does your college located at? (Hint:Gwalior)"];

//JS File for passing questions list in Concept B and Sidebar Contents

class Main extends Component {

	constructor(){
		super();
	}
	render(){
		return (
			<div className="App">
		        <div className="App-header">
		         <h2>Concept Quiz B</h2>
		        </div>
		       <QuestionsB sidebar={sideBarList} questions={questionList}/>
      		</div>
			
		);
	}

}

export default Main;

//JS File for Concept A Quiz