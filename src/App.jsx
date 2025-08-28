import { useState } from 'react'
import Tabs from './components/Tabs'
import './App.css'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'

function App() {
  const [activeTab, setActiveTab] = useState("timer")

  return (
    <>
     <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
     {activeTab==="timer"?<Timer/>:<Stopwatch/>}
    </>
  )
}

export default App
