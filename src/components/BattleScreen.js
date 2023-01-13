import React, { useEffect, useState } from "react";
import AppContext from "../context";
import { useContext } from "react";

function BattleScreen() {
    

  const context = useContext(AppContext);
  const context_data = context.potions_data;
  const potions_data = context_data.data;

  let [twoPotionsCatch, setTwoPotionsCatch] = useState([])


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

    setTwoPotionsCatch(two_potion);
    console.log("twoPotionsCatch")
    console.log(two_potion)
    console.log(twoPotionsCatch)


    
  },[]);


  return (
    <AppContext.Consumer>
        {value => (
            <>
                <div>
                    <p>Pocion 1:</p>
                    <p>Name: </p>
                    <p>Alias:</p>
                    <p>Cube:</p>
                    <p>Curative:</p>
                    <p>Mana:</p>
                    <p>Power:</p>
                </div>
                <div>
                    <p>Pocion 2:</p>
                    <p>Name: </p>
                    <p>Alias:</p>
                    <p>Cube:</p>
                    <p>Curative:</p>
                    <p>Mana:</p>
                    <p>Power:</p>
                </div>
            </>
        )}
      
    </AppContext.Consumer>
  );
}

export default BattleScreen;
