import { useState } from 'react'

import './App.css'
import SampleComponent from './components/sampleComponent/SampleComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Prodhub time</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        lezzgooooooo
      </p>
      <SampleComponent/>
    </>
  )
}

export default App
