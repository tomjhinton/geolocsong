import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'


import Home from './components/Home'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {

    return (

      <Router>
        <main>

          < Home/>


        </main>
      </Router>


    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
