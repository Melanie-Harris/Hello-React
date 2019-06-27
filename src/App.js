import React from 'react';
import './App.css';
import Input from "./component/Input";

import Image from "./component/MainImage/Image"


const FunStatements= [
  "I'm awesome",
  "I'm kind of awesome",
  "I'm more awesome than awesome",
  "I'm even more awesome",
  "My mom thinks I'm awesome",
  "Your dad thinks I'm awesome, don't tell your mom...",
  "I'm your new mom",
]

function GetRandomNumber() {
    return Math.floor(Math.random() * 6) + 1
}


function GetRandomStatement(){
  const RandomNumber = GetRandomNumber()
  return FunStatements[RandomNumber]
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={RandomStatementArray: []}
  }
componentDidMount(){
  this.PopulateRandomStatementArray()
}

PopulateRandomStatementArray= () =>{
  const newVariable=[]
  newVariable[0] = GetRandomStatement()
  // newVariable[1] = GetRandomStatement()
  // newVariable[2] = GetRandomStatement()

  this.setState({
    RandomStatementArray: newVariable
  })

}

  render() {
    return <div className="App">
      <header className="App-header">
        <Image />
        
        <br />
        <Input 
        type="text" 
        textThatIShow={this.state.RandomStatementArray[0]} />
        {/* <Input textThatIShow={this.state.RandomStatementArray[1]} />
        <Input textThatIShow={this.state.RandomStatementArray[2]} /> */}
        <br/>
        <button onClick={this.PopulateRandomStatementArray}>Click me for randomness</button>

        <p>
          This is a open source project. Please see the link below to contribute to its completion. Please help me spread good vibes.
        </p>
        <a
          className="GitHub-link"
          href="https://github.com/Melanie-Harris/Hello-React"
          target="_blank"
      >
          <img className="GitHubLogo" src="https://www.shareicon.net/download/2015/09/03/95206_cat_512x512.png" alt="Smiley face" height="42" width="42" />
        <br/> GitHub 
        </a>
        
       
      </header>
    </div>
  }
}

export default App;
