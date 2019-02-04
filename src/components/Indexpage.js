import React from 'react'

import axios from 'axios'


class Indexpage extends React.Component {
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
        <section className="section">
          <h1>Tv Shows Database</h1>

          <div className="container">
          </div>
        </section>
        <div>
          {this.state.data.map(data =>
            <div key={data._id}>
              <p>{data.name}</p>
              <figure className="image" style={{ backgroundImage: `url(${data.image})` }} />
            </div>
          )}
        </div>
      </div>

    )
  }

}

export default Indexpage
