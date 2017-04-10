import React, { Component } from 'react';
import './questions.css';
import Sidebar from './sidebar';

//Basic Styles
const styles={
questionStyle: {
    float:'left',
    'minWidth' :'70%'
  }
}
//Main Class to render Questions in concept A
class Questions extends Component {
  constructor(props){
    super();
    this.state = {sidebar:props.sidebar};
  }
  submit(event){              //On Submit evaluation
    event.preventDefault();
    var input = event.target.parentNode.querySelector('input');
    var value = input.value;
    var id=event.target.parentNode.id;
    console.log(id);
    console.log(value);
    if(value=='') alert("Please Input Some Answer");
    else if(id==0 && (value.toLowerCase())=="bangalore") alert('Right Answer');
          else if(id==1 && (value.toLowerCase())=="bangalore") alert('Right Answer');
                else if(id==2 && (value.toLowerCase())=="yes") alert('Right Answer');
                      else alert('Wrong Answer');
    input.value='';
  }
  render() {                    //Rendering questions from parent and displaying
    var DuckImage = require('./bangalore.jpg');
     var bannerStyle = {
    backgroundImage: 'url(' + DuckImage + ')',
    width :200,
    height :150
}
    var items=this.props.questions.map((elem,i)=>{
      return (<li className="card" id={i} key={elem}>{i+1}.<span>{elem}</span>                         
                      <form onSubmit={this.submit}><input type="text"/></form>
                       <section style={bannerStyle}/>
                       <button onClick={this.submit}>Submit</button>
                  </li>);
    });
    return (
      <div>
      <Sidebar  sidebar={this.state.sidebar}/>
      <div style={styles.questionStyle}>
          <ul>
              {items}
          </ul>
        </div>
      </div>
      );
  }
}

export default Questions;
//JS File to display questions in Concept A and Verifying them