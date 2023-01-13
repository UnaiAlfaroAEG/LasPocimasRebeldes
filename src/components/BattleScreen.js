import React, { useEffect, useState } from "react";
import AppContext from "../context";
import { useContext } from "react";
import curative from "../assets/potions/curative.png"
import nocurative from "../assets/potions/nocurative.png"
import cube1 from "../assets/cube/cube1.png"
import cube2 from "../assets/cube/cube2.png"
import cube3 from "../assets/cube/cube3.png"
import cube4 from "../assets/cube/cube4.png"
import cube5 from "../assets/cube/cube5.png"
import cube6 from "../assets/cube/cube6.png"
import ResultScreen from "./ResultScreen";


function BattleScreen() {
    

  const context = useContext(AppContext);
  const context_data = context.potions_data;
  const potions_data = context_data.data;


  const [twoPotionsCatch, setTwoPotionsCatch] = useState(null)
  const [viewResult, setViewResult] = useState(false)


  const catchAleatoryPotion = () => {
    let aleatory_potion =
      potions_data[Math.floor(Math.random() * potions_data.length)];
    return aleatory_potion;
  };

  const catchTwoPotions = () => {
    let aleatory1 = catchAleatoryPotion(potions_data);
    let aleatory2 = catchAleatoryPotion(potions_data);

    let twoPotion = [aleatory1, aleatory2];

    return twoPotion;
  };


  useEffect(() => {

    const chooseDiferentTypePotion = () =>{

    let two_potion=null;
    let validator = false;
    

    do{
        two_potion = catchTwoPotions(potions_data);
        if (two_potion[0].curative !== two_potion[1].curative) {
            validator = true;
        }
    }while(!validator)

    two_potion[0].cube = Math.floor((Math.random() * (6 - 1 + 1)) + 1);
    two_potion[1].cube = Math.floor((Math.random() * (6 - 1 + 1)) + 1);

    return two_potion
    }

    let finalTwoPotions = chooseDiferentTypePotion()
    setTwoPotionsCatch(finalTwoPotions)

    context.handlePotion1(finalTwoPotions[0])
    context.handlePotion2(finalTwoPotions[1])
  },[]);

  const battleWinner = (potion1,potion2) =>{

    let potion1_penalty = potion1.cube * 0.1 * potion1.power
    let potion2_penalty = potion2.cube * 0.1 * potion2.power

    let potion1_points = (potion1.cube * 0.1 * (potion1.power-potion1_penalty) / potion1.mana).toFixed(2)
    let potion2_points = (potion2.cube * 0.1 * (potion2.power-potion2_penalty) / potion2.mana).toFixed(2)

    let potion_winner = null
    let potion_loser = null
    let result_loser = null
    let result_winner = null
    let points_winner = null
    let points_loser = null
    

    if(potion1_points >= potion2_points){
      potion_winner = potion1
      potion_loser = potion2
      result_winner = `${(potion1.cube * 0.1).toFixed(2)} * ${(potion1.power-potion1_penalty).toFixed(2)} / ${(potion1.mana).toFixed(2)}`
      result_loser = `${(potion2.cube * 0.1).toFixed(2)} * ${(potion2.power-potion2_penalty).toFixed(2)} / ${(potion2.mana).toFixed(2)}`
      points_winner = potion1_points
      points_loser = potion2_points 
    }else{
      potion_winner = potion2
      potion_loser = potion1
      result_winner = `${(potion2.cube * 0.1).toFixed(2)} * ${(potion2.power-potion2_penalty).toFixed(2)} / ${(potion2.mana).toFixed(2)}`
      result_loser = `${(potion1.cube * 0.1).toFixed(2)} * ${(potion1.power-potion1_penalty).toFixed(2)} / ${(potion1.mana).toFixed(2)}`
      points_loser = potion1_points
      points_winner = potion2_points 
    }

    context.handleWinnerPotion({result: "winner", potion: potion_winner, result_winner: result_winner, points:points_winner})
    context.handleLoserPotion({result: "loser", potion: potion_loser, result_loser: result_loser, points: points_loser})
    setViewResult(true)
  }
 

  return (
    <>
    {viewResult  ? (<ResultScreen/>) : context.potion1 && context.potion2  ? (
            <>
                <div>
                  <div>
                    <img src={context.potion1.curative ? curative : nocurative}/>
                  </div>
                  <div>
                    
                    <img src={context.potion1.cube == 1 ? cube1 : context.potion1.cube === 2 ? cube2 : context.potion1.cube === 3 ? cube3 : context.potion1.cube === 4 ? cube4 : context.potion1.cube === 5 ? cube5 : context.potion1.cube === 6 ? cube6 : null} />
                  </div>
                  <div>
                    <p>name: {context.potion1.name}</p>
                    <p>alias: {context.potion1.alias}</p>
                    <p>curative: {context.potion1.curative.toString()}</p>
                    <p>power: {context.potion1.power}</p>
                    <p>mana: {context.potion1.mana}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={context.potion2.curative ? curative : nocurative}/>
                  </div>
                  <div>
                  <img src={context.potion2.cube === 1 ? cube1 : context.potion2.cube === 2 ? cube2 : context.potion2.cube === 3 ? cube3 : context.potion2.cube === 4 ? cube4 : context.potion2.cube === 5 ? cube5 : context.potion2.cube === 6 ? cube6 : null} />
                  </div>
                  <div>
                    <p>name: {context.potion2.name}</p>
                    <p>alias: {context.potion2.alias}</p>
                    <p>curative: {context.potion2.curative.toString()}</p>
                    <p>power: {context.potion2.power}</p>
                    <p>mana: {context.potion2.mana}</p>
                  </div>
                </div>
                <div>
                  <button onClick={() => battleWinner(context.potion1,context.potion2)}>Launch battle</button>
                </div>
            </>
        ) : null}
      </>
  );
}

export default BattleScreen;
