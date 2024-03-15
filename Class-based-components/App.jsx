import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      count:0,
      count1:10,
    };
  }
  render() {
    const {name , location}=this.props;
    const{count, count1}=this.state;
    return( 
    <>
    <h1>Name - {name}</h1>
    <h3>
      Location - {location}
    </h3>
    <h1>{count}  </h1>
    <button onClick={()=>{
      this.setState({
       count:count +1
      })
    }}>count</button>
    </>
    );
  }
}

export default App;
