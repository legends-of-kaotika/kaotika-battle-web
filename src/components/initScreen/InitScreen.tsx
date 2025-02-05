import { useEffect } from 'react';
import KaotikaLegendsLogo from './KaotikaLengedsLogo';

interface InitScreenInterface {
  // eslint-disable-next-line no-unused-vars
  setAnimationFinished: (value: boolean) => void;
}

const InitScreen: React.FC<InitScreenInterface> = ({setAnimationFinished}) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      
      setAnimationFinished(true);
    }, 1000000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-screen h-screen bg-[url('/images/battle_bg.webp')] bg-no-repeat bg-cover overflow-hidden">
      <KaotikaLegendsLogo/>
    </div>
  );
};

export default InitScreen;