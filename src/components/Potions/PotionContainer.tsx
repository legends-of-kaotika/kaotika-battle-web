import React from 'react';
import potion_disabled from '/images/potion_disabled.png';
import useStore from '../../store/store';
import getPotionImages from '../../helpers/getPotionsByattacker';


interface Inventory {
  antidote_potions: any[];
  healing_potions: any[];
  enhancer_potions: any[];
}

const PotionContainer: React.FC = ({ }) => {
  const { attacker } = useStore();
  const defaultInventory = {
    antidote_potions: [],
    healing_potions: [],
    enhancer_potions: []
  };
  
  const inventory: Inventory = attacker?.inventory || defaultInventory;
  const potionImages = getPotionImages(inventory);

  if (attacker) {
    return (
      <div className="flex flex-col h-auto w-1/12 justify-center items-center">
        <div className="flex flex-col">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img className="w-28 h-28 mb-2" src={potion_disabled} draggable="false" />
              {potionImages[index] && <img className="absolute w-16 h-16 top-5" src={potionImages[index]} draggable="false" />}
            </div>
          ))}
        </div>
      </div>
    );
  }


};

export default PotionContainer;

