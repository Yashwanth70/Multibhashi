import React, { Component } from 'react';

const styles={
	sidebar: {
    width: 256,
    height: 400,
    float:'left',
    backgroundColor : '#BFC9CA',
    margin : '20px 20px'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content:{
  	paddingLeft : '30%',
    lineHeight : '30px',
  },
  header:{
    paddingLeft : '5%',
  },
  anchor: {
    textDecoration : 'none',
    backgroundColor: '#F1948A',
     border:'1px solid #C0DEED',
     padding : '5px 15px'
  }
}
class Sidebar extends Component {
  constructor(){
    super();
  }
  render(){
  	console.log(this.props)
  			var refer;
  	var concepts=this.props.sidebar.map((elem1,i)=>{
  		refer=elem1;
  		if(refer == 'Concept A') refer ='/';
      return (<div style={styles.content} key={elem1}>
	      	<a style={styles.anchor} href={refer}>{elem1}</a>
	      	<br/>
      	</div>);
    });
  	return (
  		<div style={styles.sidebar}>
  			<h1 style={styles.header}>Concepts Menu</h1>
  			<div style={styles.divider} />
	        {concepts}
	        <div style={styles.divider} />
      </div>
  		);
  }

}
export default Sidebar;