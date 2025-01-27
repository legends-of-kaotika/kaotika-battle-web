import React from 'react';
import potion_disabled from '../../../public/potion_disabled.png';
import antidote_1 from '../../../public/antidote_1.png';
import enhancer_2 from '../../../public/enhancer_2.png';
import healing_3 from '../../../public/healing_3.png';

interface PotionContainerInterface {
    antidote: boolean;
    enhancer: boolean;
    healing: boolean;
}

const PotionContainer: React.FC<PotionContainerInterface> = ({ antidote, enhancer, healing }) => {
    return (
        <div className="flex flex-col h-auto w-1/12 justify-center items-center">
        <div className="flex flex-col">
            <div className="relative flex flex-col items-center">
                <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion1_disabled" draggable="false"/>
                {antidote && <img className="absolute w-16 h-16 top-5" src={antidote_1} alt="potion1" draggable="false"/>}
            </div>
            <div className="relative flex flex-col items-center">
                <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion2_disabled" draggable="false"/>
                {enhancer && <img className="absolute w-16 h-16 top-5" src={enhancer_2} alt="potion2" draggable="false"/>}
            </div>
            <div className="relative flex flex-col items-center">
                <img className="w-28 h-28 mb-2" src={potion_disabled} alt="potion3_disabled" draggable="false"/>
                {healing && <img className="absolute w-16 h-16 top-5" src={healing_3} alt="potion3" draggable="false"/>}
            </div>
        </div>
    </div>
    );
};

export default PotionContainer;

