import { useState } from 'react'

const Form = ({ props }) => {

  const [forms, setForms] = useState({
    name: "",
    URL: ""
  })
  
  const handleChange = (event) => {

  if(event.target.name === 'name'){
    const temp = {
      name: event.target.value,
      URL: forms.URL
    }
    setForms(temp)
  } else if(event.target.name === 'URL'){
    const temp = {
      name: forms.name,
      URL: event.target.value
    }
    setForms(temp)
  }
  
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

     props.handleSubmit(forms)
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <br />

      <label>
        URL:
        <input type="text" name="URL" onChange={handleChange}/>
      </label>

      <br />
      
      <input type="submit" value="Submit" onClick={onFormSubmit} />
      
    </form>
  )
}

export default Form
