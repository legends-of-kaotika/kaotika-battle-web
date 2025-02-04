import { AntidotePotion } from './AntidotePotion';
import { EnhancerPotion } from './EnhancerPotion';
import { HealingPotion } from './HealingPotion';

export interface Inventory {
  healing_potions: HealingPotion[],
  antidote_potions: AntidotePotion[],
  enhancer_potions: EnhancerPotion[],
}