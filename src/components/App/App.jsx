import React from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import Die from '../Die/Die'
import Confetti from 'react-confetti'
// import diceData from '../../data.js'

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=>{
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
  }, [dice])

  const diceList = dice.map((ele)=>{
    return <Die holdDie={holdClickedDie} key={ele.id} number={ele.value.toString()} isHeld={ele.isHeld} id={ele.id} />
  }) 

  function generateNewDie(){
    return {
      value:Math.ceil(Math.random() * 6), 
      isHeld:false,
      id:nanoid()
    }
  }

  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(
            generateNewDie()
          )
      }
      return newDice
  }

  function rollDice(){
    if(!tenzies){
      setDice((prevDice)=>{
        return prevDice.map((die)=>{
          return die.isHeld ? 
          die : 
          generateNewDie()
        })
      })
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
    
  }

  function holdClickedDie(event, diceID){
    setDice((prevDice)=>{
      return prevDice.map((die)=>{
        return die.id == diceID ? {...die, isHeld: !die.isHeld} : {...die}
      })
    })
  }
  
  return (
    <main className='--app-app-container'>
      {tenzies && <Confetti />}
      <h1 className='--app-title'>Tenzies</h1>
      <p className='--app-instructions'>Roll until all dice are the same.Click each die to freeze it at it's current value between rolls</p>
      <div className='--app-dice-container'>{diceList}</div>
      <button className='--app-btn-roll' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  )
}


