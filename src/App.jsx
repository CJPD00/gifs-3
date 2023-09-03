import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function App() {

  const [cats, setcats] = useState(['galaxy'])

  return (

    <>

      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setcats}></AddCategory>
      <hr />

      <ol>
        {cats.map((val,i)=>(
          <GifGrid key={i} category={val}>{val}</GifGrid>
        ))}
      </ol>

    </>
  )
}

export default App
