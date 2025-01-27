import React from 'react';
import potion_disabled from '../../../public/potion_disabled.png';
import antidote from '../../../public/antidote.png';
import enhancer from '../../../public/enhancer.png';
import healing from '../../../public/healing.png';

interface PotionContainerInterface {
    potion1: boolean;
    potion2: boolean;
    potion3: boolean;
}

const PotionContainer: React.FC<PotionContainerInterface> = ({ potion1, potion2, potion3 }) => {
    return (
        <div className="flex flex-col h-auto w-1/12 justify-center items-center rounded-md border-1 border-amber-300">
        <div className="flex flex-col">
            <div className="relative flex flex-col items-center">
                <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion1_disabled" />
                {potion1 && <img className="absolute w-16 h-16 top-4" src={antidote} alt="potion1" />}
            </div>
            <div className="relative flex flex-col items-center">
                <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion2_disabled" />
                {potion2 && <img className="absolute w-16 h-16 top-4" src={enhancer} alt="potion2" />}
            </div>
            <div className="relative flex flex-col items-center">
                <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion3_disabled" />
                {potion3 && <img className="absolute w-16 h-16 top-4" src={healing} alt="potion3" />}
            </div>
        </div>
    </div>
    );
};

export default PotionContainer;

