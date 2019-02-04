import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }
  componentDidMount(){
    axios.get('/api/tvshows')
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }
  render(){
    if(!this.state.data) return <p>Loading...</p>
    return(
      <div>
        <h1>Hello World  {console.log(this.state)}</h1>
        {this.state.data.map(data =>
          <p key={data._id}>{data.name}</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('roots'))
