import React from 'react';
import potion_disabled from '/images/potion_disabled.png';
import useStore from '../../store/store';
import getPotionImages from '../../helpers/getPotionsByattacker';


interface Inventory {
  antidote_potions: any[];
  healing_potions: any[];
  enhancer_potions: any[];
}

const PotionContainer: React.FC = ({}) => {
  const {attacker} = useStore();
  
  const defaultInventory = {
    antidote_potions: [],
    healing_potions: [] ,
    enhancer_potions: [] 
  };

 const inventory: Inventory = attacker?.inventory || defaultInventory;

  const potionImages = getPotionImages(inventory);

  console.log("PotionImages:");
  
  console.log(potionImages);
  

  if (attacker) {
    return (
      <div className="flex flex-col h-auto w-1/12 justify-center items-center">
        <div className="flex flex-col">
          <div className="relative flex flex-col items-center">
            <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion1_disabled" draggable="false" />
          {potionImages[0] && <img className="absolute w-16 h-16 top-5" src={potionImages[0]} alt="potion1" draggable="false" />}  
          </div>
          <div className="relative flex flex-col items-center">
            <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion2_disabled" draggable="false" />
          {potionImages[1] && <img className="absolute w-16 h-16 top-5" src={potionImages[1]} alt="potion2" draggable="false" />}   
          </div>
          <div className="relative flex flex-col items-center">
            <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion3_disabled" draggable="false" />
           {potionImages[2] &&  <img className="absolute w-16 h-16 top-5" src={potionImages[2]} alt="potion3" draggable="false" />}
          </div>
        </div>
      </div>
    );
  }
  
 
};

export default PotionContainer;

