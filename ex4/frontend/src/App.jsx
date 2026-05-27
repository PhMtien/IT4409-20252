import React, { useEffect, useState } from 'react'

export default function App() {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then((r) => r.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg('Could not reach backend'))
  }, [])

  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <h1>React Frontend</h1>
      <p>Backend says: <strong>{msg}</strong></p>
      <hr />
      <p>Try POST /api/echo from frontend:</p>
      <button onClick={async () => {
        const res = await fetch('http://localhost:3001/api/echo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ hello: 'from frontend' })
        })
        const json = await res.json()
        alert(JSON.stringify(json))
      }}>Send echo</button>
    </div>
  )
}
