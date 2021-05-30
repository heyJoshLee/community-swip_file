import React, { useState } from 'react'


const New = () => {
  const [formData, setFormdata] = useState({
    body: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h3>New Comment</h3>
      <input type="text" className="form-control"
      value={formData.body} onChange={(e) => setFormdata({...formData, body: e.target.value})} />
      <input type="submit" className="btn btn-primary btn-block" />
    </form>
  )
}

export default New