import { useEffect } from 'react';
import 'animate.css';
import KaotikaLegendsLogo from './KaotikaLengedsLogo';
import warrior from '/images/Warrior1.png';
import InitCharacter from './InitCharacter';

interface InitScreenInterface {
  // eslint-disable-next-line no-unused-vars
  setAnimationFinished: (value: boolean) => void;
}

const InitScreen: React.FC<InitScreenInterface> = ({setAnimationFinished}) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      
      setAnimationFinished(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const animations : string[] = [
    'animate__backInLeft',
    'animate__backInLeft transform scale-x-[-1]',
  ];

  return (
    <div className="w-screen h-screen bg-[url('/images/battle_bg.webp')] bg-no-repeat bg-cover">
      <KaotikaLegendsLogo/>  
      <div className='flex w-[100%] p-10 items-center h-full justify-center overflow-hidden'>
        {
          animations.map((animation, i)=> (
            <InitCharacter
              key={i}
              character={warrior}
              styleClass={animation}
            />
          ))
        }
      </div>
    </div>
  );
};

export default InitScreen;