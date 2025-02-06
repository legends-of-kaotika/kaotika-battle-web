/* import 'animate.css';
import { useEffect, useState } from 'react';
import InitCharacter from './InitCharacter';
import KaotikaLegendsLogo from './KaotikaLengedsLogo';
import loadBackground from '/images/load_bg.webp';

interface InitScreenInterface {
  // eslint-disable-next-line no-unused-vars
  setAnimationFinished: (value: boolean) => void;
}

const InitScreen: React.FC<InitScreenInterface> = ({setAnimationFinished}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      
      setAnimationFinished(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const animations : string[] = [
    'animate__fadeIn',
  ];


  return (
    <div className="w-screen h-screen bg-[url('/images/battle_bg.webp')] bg-no-repeat bg-cover overflow-hidden max-h-full">
      {loaded ? null : (
        <div className='absolute overflow-hidden'>
          <div className='flex w-[100%] p-2 items-center h-[90%] justify-center'>
            {
              animations.map((animation, i)=> (
                <InitCharacter
                  key={i}
                  character={loadBackground}
                  animate={animation}
                  setLoaded={setLoaded}
                />
              ))
            }
          </div>
        </div>
      )}
    
      {loaded ? (
        <KaotikaLegendsLogo/>
      ) : null}
    </div>
  );
};

export default InitScreen; */