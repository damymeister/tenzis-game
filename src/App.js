import React from "react"
import Die from "./components/Die"
import Confetti from 'react-confetti'
export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [rollsNumber, setrollsNumber] = React.useState(0)
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(true);
  const [bestTime, setBestTime] = React.useState(null);
 
  React.useEffect(() => {
      const isallHeld = dice.every(item => item.isHeld === true)
      const firstValue = dice[0].value
      const isallValues = dice.every(item => item.value === firstValue)
      if(isallHeld && isallValues){
          setTenzies(true)
          const currentTime = time;
          const storedBestTime = localStorage.getItem("bestTime");
          if(!storedBestTime || currentTime < storedBestTime){
            localStorage.setItem("bestTime", currentTime);
            setBestTime(currentTime);
          }
      }
  }, [dice])

        React.useEffect(() => {
            let intervalId;
            if (running) {
              intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
              }, 1000);
            }
            return () => {
              clearInterval(intervalId);
            };
          }, [running]);

          React.useEffect(() => {
            const storedBestTime = localStorage.getItem("bestTime");
            if (storedBestTime) {
              setBestTime(storedBestTime);
            }
          }, []);
          
          const formatTime = () => {
            const minutes = Math.floor(time / 60).toString().padStart(2, '0');
            const seconds = (time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
          };
          const bestformatTime = () => {
            const minutes = Math.floor(bestTime / 60).toString().padStart(2, '0');
            const seconds = (bestTime % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
          };
         
  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id : Math.random().toString(36).substr(2, 9)
    }
}
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(generateNewDie())
      }
      return newDice
  }
  
  function rollDice() {
   if(!tenzies){
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
          die :
          generateNewDie()
  }))
  setrollsNumber(prev => prev+1)
   }
   else{
    setDice(previous=>allNewDice())
    setTenzies(false)
    setrollsNumber(0)
    setTime(0)
   }
}
function holdDice(id){
  setDice(previous => previous.map(die => {
    return id === die.id ? {...die, isHeld : !die.isHeld} : die
  }))
}
  const diceElements = dice.map(die => <Die key = {die.id} value={die.value} isHeld = {die.isHeld} holdDice={() => holdDice(die.id)}/>)
  
  return (
      <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
           {tenzies?  <Confetti
              width={1200}
              height={500}
            />:tenzies}
            <p className="number-rolls">Current number of rolls: {rollsNumber}</p>
            <p className="stopwatch">Game time: {formatTime()}</p>
            <p className="besttime">Best time: {bestformatTime()}</p>
      </main>
  )
}