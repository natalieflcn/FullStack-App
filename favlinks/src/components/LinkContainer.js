import { useState, useEffect } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const fetchLinks = async () => {
    try {
      let response = await fetch('/links')
      console.log(response)
      let data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const postLink = async () => {
    let testLink = {
      name: 'Testing',
      URL: 'test.com'
    }

    try {
      let response = await fetch('/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testLink)
      })
      console.log(response)
      let message = response.text()
      console.log(message)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //fetchLinks(),
    postLink()
  }, [])

  const [favLinks, setLinks] = useState([])

  const handleRemove = (index) => {
    const newLinks = favLinks.filter((item, i) => i != index)
    setLinks(newLinks)
  }

  const handleSubmit = (favLink) => {
    const favLinksAndThenSome = [...favLinks, favLink]
    setLinks(favLinksAndThenSome)
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      
      <Table props={{ linkData: favLinks, setLinks: setLinks, removeLink: handleRemove }}/>
    
      <br />

      <h3>Add New</h3>
      <Form props={{handleSubmit: handleSubmit}}/>
    </div>
  )
}

export default LinkContainer
