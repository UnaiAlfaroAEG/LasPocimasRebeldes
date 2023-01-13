import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../context";
import curative from "../assets/potions/curative.png"
import nocurative from "../assets/potions/nocurative.png"
import cube1 from "../assets/cube/cube1.png"
import cube2 from "../assets/cube/cube2.png"
import cube3 from "../assets/cube/cube3.png"
import cube4 from "../assets/cube/cube4.png"
import cube5 from "../assets/cube/cube5.png"
import cube6 from "../assets/cube/cube6.png"
import BattleScreen from "./BattleScreen";

const ResultScreen = () => {
    const [viewBattleScreen,setViewBattleScreen] = useState(false)

    const context = useContext(AppContext);

    const handleButtonPlayAgain = () => {
        setViewBattleScreen(true)
    }

return(
    <>
    {viewBattleScreen  ? (<BattleScreen/>) : (<div>
        <div>
            {console.log(context)}
            <div>
                <img src={context.winnerPotion.potion.curative ? curative : nocurative}/>
            </div>
            <div>
                <img src={context.winnerPotion.potion.cube === 1 ? cube1 : context.winnerPotion.potion.cube === 2 ? cube2 : context.winnerPotion.potion.cube === 3 ? cube3 : context.winnerPotion.potion.cube === 4 ? cube4 : context.winnerPotion.potion.cube === 5 ? cube5 : context.winnerPotion.potion.cube === 6 ? cube6 : null}/>
            </div>
            <div>
                <p>Resultado de la poción ganadora: {context.winnerPotion.result_winner} = {context.winnerPotion.points}</p>
                <p>Resultado de la poción perdedora: {context.loserPotion.result_loser} = {context.loserPotion.points}</p>
            </div>
        </div>
        <div>
            <button onClick={handleButtonPlayAgain}>PLAY AGAIN</button>
        </div>
    </div>)}
    </> 
    )
}

export default ResultScreen;