import React from 'react'

const Form = () =>{
  return(
    <form >
      <div className="field">
        <label className="label">Number To</label>
        <div className="control">
          <input  name="to" className="input is-medium" type="number" placeholder="0" min="0" />
        </div>
      </div>

      <div className="field">
        <label className="label">Translation</label>
        <div className="control">
          <div className="select">

          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea name="message"
            className="textarea has-fixed-size" placeholder="Your Message....."/>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </form>

  )
}

export default Form
