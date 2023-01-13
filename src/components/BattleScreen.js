import React from 'react'

function BattleScreen ({data}){

  const catchAleatoryPotion = (datos) =>{
    let aleatory_potion = datos[Math.floor(Math.random() * datos.length)];
    return aleatory_potion
  }


  const catchTwoDifferentPotions = () => {
    
    let aleatory1=catchAleatoryPotion(data.data)
    let aleatory2=catchAleatoryPotion(data.data)
    let validator = false

    do{
        if(aleatory1.curative === aleatory2.curative){
            console.log("son iguales")
            validator=false
        }else{
            console.log("son diferentes")
            validator=true
        }
    }while(!validator);
    

    console.log("aleatorio1")
    console.log(aleatory1)
    console.log("aleatorio2")
    console.log(aleatory2)
  }
  catchTwoDifferentPotions(data.data)




 

    return(

        <div>
            <p>{data}</p>
        </div>
    )
}

export default BattleScreen ;