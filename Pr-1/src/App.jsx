import { useState } from 'react'
import Data from './data'
import { Functiondata } from './function-data'
import Functionrecord from './function-record'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Data/>
      <Functionrecord data={Functiondata}/>
    </>
  )
}

export default App