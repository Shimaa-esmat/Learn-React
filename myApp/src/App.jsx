import EditingData from "./pages/EditingData"
import Preview from "./pages/Preview"
import { useState } from "react"

function App(){
  const [page,setPage] = useState(true)
  
  return (
    <>
    {page ? <EditingData active={()=>{
      setPage(false)
    }}/>: <Preview 
    active={()=>{
      setPage(true)
    }}/>}
    </>
  )
}

export default App

