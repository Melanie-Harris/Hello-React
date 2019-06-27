import React from 'react';
import './App.css';
import Input from "./component/Input";

import Image from "./component/MainImage/Image"


const FunStatements= [
  "Live as if you will die tomorrow, learn as if you will live forever... -Ghandi",

  "We make a living by what we get, but we make a life by what we give... - Winston Churchill",

  "Never, never, never quit... - Winston Churchill",

  "Watch your thoughts, they become your words. Watch your words, they become your actions. Watch your actions, they become your habits. Watch your habits, they become your character. Watch your character, it becomes your destiny...- lao - tze",

  "love slow, live long, laugh hard",

  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",

  "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. -Rob Siltanen",
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
        max="0"
        textThatIShow={this.state.RandomStatementArray[0]} />
        {/* for multiple input fields to display---------- */}
        {/* <Input textThatIShow={this.state.RandomStatementArray[1]} />
        <Input textThatIShow={this.state.RandomStatementArray[2]} /> */}
        <br/>
        <button className="button" onClick={this.PopulateRandomStatementArray}>Next Quote  </button>

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
