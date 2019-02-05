import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './components/Home'
import Form from './components/Form'
import Nav from './components/Nav'

import Indexpage from './components/Indexpage'

import 'bulma'
import './style.scss'


class App extends React.Component {

  render(){
    return(

      <BrowserRouter>
        <main>
          <Nav />
          <Switch>
            <Route path="/tvshows/new" component={Form} />
            <Route path="/tvshows" component={Indexpage}/>
            <Route path="/" component={Home}/>
          </Switch>
        </main>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(<App/>, document.getElementById('roots'))
