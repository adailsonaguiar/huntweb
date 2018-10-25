import React, { Component } from 'react'
import Header from './components/Header'
import "./styles.css"
import Main from "./pages/main/index"


//Stateless component
const App = () =>(
  <div className="App">
        <Header />
        <Main />
      </div>
)

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!=-=-=-=-=-=-=-=!</h1>
      </div>
    )
  }
} */

export default App
