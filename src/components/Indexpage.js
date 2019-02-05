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
      <section className="section">
        <h1 className="title is-1">Tv Shows</h1>
        <div className="container">
          <div className="columns is-multiline">
            {this.state.data.map(data =>
              <div className="column is-one-fifth" key={data._id}>
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-header-title">{data.name}</h2>
                  </div>
                  <div className="card-image">
                    <figure className="image" style={{ backgroundImage: `url(${data.image})` }} />
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p><strong>Year:</strong> {data.year}</p>
                    </div>
                  </div>
                </div>
              </div>

            )}
          </div>
        </div>
      </section>

    )
  }

}

export default Indexpage
