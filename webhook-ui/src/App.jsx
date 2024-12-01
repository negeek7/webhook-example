import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState(null);



  const handleSubmit = async () => {
    await fetch('http://localhost:8080/new-user', {
      method: "POST",
      body: JSON.stringify({user: username})
    })
  }

  return (
    <>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <button onClick={handleSubmit}> Greet me! </button>
      </div>
    </>
  )
}

export default App
