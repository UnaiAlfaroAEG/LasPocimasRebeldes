import '../App.css'
import React, {useState} from 'react'
import axios from "axios"
import BattleScreen from './BattleScreen';
import AppContext from '../context';

function PrimaryScreen() {
  const [viewBattleScreen, setViewBattleScreen] = useState(false);
  const [potion1, setPotion1] = useState(null);
  const [potion2, setPotion2] = useState(null);
  const [data, setData] = useState(null)
  const [winnerPotion, setWinnerPotion] = useState(null)
  const [loserPotion, setloserPotion] = useState(null)


  const ReceivePotions = () => {

    axios({
      method: 'get',
      url: `https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js`,
    })
    .then(response => {
      console.log(response)
      setViewBattleScreen(true)
      setData(response)
    })
    .catch(error => {
      alert(error)
    });
}


const handlePotion1 = (potion) => {
  setPotion1(potion)
}
const handlePotion2 = (potion) => {
  setPotion2(potion)
} 

const handleWinnerPotion = (potion) =>{
  setWinnerPotion(potion)
}

const handleLoserPotion = (potion) =>{
  setloserPotion(potion)
}


  
  return(
    <AppContext.Provider value={{potions_data:data, potion1: potion1, potion2:potion2,winnerPotion,loserPotion, handlePotion1, handlePotion2,handleWinnerPotion,handleLoserPotion}}>
    {viewBattleScreen === false ? 
      (<div className="InitialContainer">
        <div className="SecondayContainer">
          <p className= "PrincipalP">LAS PÓCIMAS REBELDES</p>
          <button className= "PrincipalBoton" onClick={ReceivePotions}>
            ENTER
          </button>
        </div>
      </div>): 
      (<BattleScreen/>)
      }
    
    </AppContext.Provider>
    
  )


}



export default PrimaryScreen;
