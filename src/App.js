import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./component/Input";


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
  newVariable[1] = GetRandomStatement()
  newVariable[2] = GetRandomStatement()

  this.setState({
    RandomStatementArray: newVariable
  })

}

  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Input textThatIShow={this.state.RandomStatementArray[0]} />
        <Input textThatIShow={this.state.RandomStatementArray[1]} />
        <Input textThatIShow={this.state.RandomStatementArray[2]} />
        <button onClick={this.PopulateRandomStatementArray}>Click me for randomness</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  }
}

export default App;
