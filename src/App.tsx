import React, { useState } from 'react'
import Clock from './components/Clock'
import Greeting from './components/Greeting'
import Focus from './components/Focus'
import Switch from './components/Switch'
import Scores from './components/Scores'
import './app.css'
import Quote from './components/Quote'

export default function App() {
  // 1. Firstly, set the intial scores
  const initialScores = ['W', 'L', 'L']

  // 2. Create a state `latestScores` using the useState hook. 
  //    The useState hook gives me back the current state (`latestScores`), and a
  //    function to update that current state at a later time
  const [latestScores, setLatestScores] = useState(initialScores) 

  const updateScores = (latestScore) => {
    // 1. Extract the scores from `latestScores` as named variables
    const [oldestScore, olderScore, oldScore] = latestScores
    
    // 2. Set/update my `latestScores` state with the old scores and
    //    the new score (`latestScore`), which has been passed into
    //    the updateScores function
    setLatestScores([olderScore, oldScore, latestScore])
  }

  fetch('https://quote-garden.herokuapp.com/quotes/random')

  return (
    <div className="container">
      <div><Clock/></div>
      <div><Greeting firstName={'Raphael'}/></div>
      <div><Focus/></div>
      <div><Quote quote={{ text:'A quote goes here', author:'Me'}}/></div>
      {/* <div className="left">
        <button onClick={() => updateScores('W')}>W</button>
        <button onClick={() => updateScores('L')}>L</button>
        <button onClick={() => updateScores('D')}>D</button>
      </div>

      <div className="right">
        <Scores latestScores={latestScores} />
      </div> */}
    </div>
  )
}