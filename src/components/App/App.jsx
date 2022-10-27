import React from 'react'
import './App.css'
import Die from '../Die/Die'
import diceData from '../../data.js'

export default function App() {
  const dice = diceData.map((ele)=>{
    return <Die key={ele.id} number={ele.value} />
  })
  return (
    <main className='--app-app-container'>
      {/* <h1 className='--app-title'>Tenzies</h1>
      <p className='--app-instructions'>Roll until all dice are the same.Click each die to freeze it at it's current value between rolls</p> */}
      <div className='--app-dice-container'>{dice}</div>
      {/* <button className='--app-btn-roll'>Roll</button> */}
    </main>
  )
}


