import React,  { useState, useEffect } from 'react'
import { getTypes } from '../../actions/types'
import { getIndustries } from '../../actions/industries'
import { useDispatch } from 'react-redux'

const New = () => {

  const dispatch = useDispatch()
  const [industries, setIndustries] = useState(null)
  const [types, setTypes] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIndustries(await dispatch(getIndustries()))
      setTypes(await dispatch(getTypes()))
    }
    fetchData()
  }, [])

  const [formData, setFormData] = useState({
    title: "",
    body: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  if (!industries || !types) {
    return <div>Loading...</div>
  }

  const renderTypesOptions = () => {
    return types.map(type => {
      return (
        <option className="form-control" value={type.attributes.name}>{type.attributes.name}</option>
      )
    })
  }

  const renderIndustriesOptions = () => {
    return industries.map(industry => {
      return (
        <option className="form-control" value={industry.attributes.name}>{industry.attributes.name}</option>
      )
    })
  }

  return (
    <div>
      <h1>New Submission</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="title">Title</label>
          <input id="title" value={formData.title} 
          onChange={(e) => setFormData({...formData, title: e.target.value})} type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
        <textarea id="bod" className="form-control" value={formData.body}
      onChange={(e) => setFormData({...formData, body: e.target.value})} name="" cols={30} rows={10}></textarea>
        </div>
        <p>Type</p>
        <select name="type">
          {renderTypesOptions()}
        </select>
        <p>Industry</p>
        <select name="type">
          {renderIndustriesOptions()}
        </select>
        <div className="form-group">
        <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>

    </div> 
  )
}

export default New