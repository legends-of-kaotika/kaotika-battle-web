import { AntidotePotion } from '../../src/Interfaces/AntidotePotion';
import { EnhancerPotion } from '../../src/Interfaces/EnhancerPotion';
import { HealingPotion } from '../../src/Interfaces/HealingPotion';
import antidote from '/images/antidote_1.png';
import enhancer from '/images/enhancer_2.png';
import healing from '/images/healing_3.png';

type Potion = HealingPotion | AntidotePotion | EnhancerPotion;

interface Inventory {
  antidote_potions: AntidotePotion[];
  enhancer_potions: EnhancerPotion[];
  healing_potions: EnhancerPotion[];
}

function getPotionImages(inventory: Inventory): string[] {
  const potionImages: string[] = [];

  const addPotions = (potions: Potion[], image: string, maxCount: number) => {
    for (let i = 0; i < potions.length && potionImages.length < 3 && maxCount > 0; i++) {
      potionImages.push(image);
      maxCount--;
    }
  };

  addPotions(inventory.antidote_potions, antidote, 3);
  addPotions(inventory.enhancer_potions, enhancer, 3);
  addPotions(inventory.healing_potions, healing, 3);

  return potionImages.slice(0, 3);
}

export default getPotionImages;