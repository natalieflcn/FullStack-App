import React from 'react'
import LinkContainer from './components/LinkContainer'
import './App.css'


function App() {

  const fetchAPI = async () => {
    try {
      let response = await fetch ('/api')
      let data = await response.json()
      setMessage(data.message)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  
  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}

export default App
