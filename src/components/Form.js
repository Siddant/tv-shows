import React from 'react'
import axios from 'axios'

class Form extends React.Component{
  constructor(){
    super()
    this.state = {}
    this.handleChange =this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)

  }

  handleChange({target: { name, value } }){
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/tvshows',{
      ...this.state.data
    })
      .then(res => console.log(res.data.message))
      .catch(() => console.log('Translation was un-successful. Message was not sent'))
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Tv Show Name</label>
          <div className="control">
            <input onChange={this.handleChange}   name="name" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input onChange={this.handleChange}  name="image" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Genre</label>
          <div className="control">
            <input  onChange={this.handleChange}  name="genre" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Year</label>
          <div className="control">
            <input onChange={this.handleChange} name="year" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Stars</label>
          <div className="control">
            <input onChange={this.handleChange} name="stars" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">ratings</label>
          <div className="control">
            <input onChange={this.handleChange} name="ratings" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Runtime</label>
          <div className="control">
            <input onChange={this.handleChange} name="runtime" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Plot</label>
          <div className="control">
            <input onChange={this.handleChange} name="plot" className="input is-medium" type="text" />
          </div>
        </div>

        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </form>
    )
  }

}

export default Form
