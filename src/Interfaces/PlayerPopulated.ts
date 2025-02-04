import { AntidotePotion } from './AntidotePotion';
import { Armor } from './Armor';
import { Artifact } from './Artifact';
import { Boot } from './Boot';
import { EnhancerPotion } from './EnhancerPotion';
import { HealingPotion } from './HealingPotion';
import { Helmet } from './Helmet';
import { Ingredient } from './Ingredients';
import { Modifier } from './Modifier';
import { Profile } from './Profile';
import { Ring } from './Ring';
import { Shield } from './Shield';
import { Task } from './Task';
import { Weapon } from './Weapon';

export interface PlayerPopulated {
  _id: string;
  name: string;
  nickname: string;
  avatar: string;
  email: string;
  experience: number;
  level: number;
  gold: number;
  is_active: boolean;
  created_date: string;
  profile: Profile | null;
  attributes: Modifier;
  classroom_id: string | null;
  isBetrayer: boolean;
  equipment: {
    helmet: Helmet | null,
    weapon: Weapon,
    armor: Armor,
    shield: Shield | null,
    artifact: Artifact,
    boot: Boot | null,
    ring: Ring | null,
    healing_potion: HealingPotion,
    antidote_potion: AntidotePotion,
    enhancer_potion: EnhancerPotion,
  },
  inventory: {
    helmets: Helmet[],
    weapons: Weapon[],
    armors: Armor[],
    shields: Shield[],
    artifacts: Artifact[],
    boots: Boot[],
    rings: Ring[],
    ingredients: Ingredient[],
    healing_potions: HealingPotion[],
    antidote_potions: AntidotePotion[],
    enhancer_potions: EnhancerPotion[],
  },
  tasks: Task[]
}

export interface PlayerPopulatedDocument extends PlayerPopulated, Document {
  // You can add any custom methods if needed
}