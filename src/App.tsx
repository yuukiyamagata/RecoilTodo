import { useState } from 'react'
import InputTask from './components/InputTask'
import AddTask from './components/AddTask'
import './App.css'
import { RecoilRoot } from "recoil";

function App() {

  return (
    <RecoilRoot>
    <div className="task">
        <InputTask />
        <AddTask />
    </div>
    </RecoilRoot>
  )
}

export default App
