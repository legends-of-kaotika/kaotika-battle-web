import 'animate.css';
import { useState } from 'react';

interface InitCharacterProps{
  character: string;
  styleClass: string;
  animate: string;
  setLoaded: (load : boolean) => void;
}

export default function InitCharacter({character, styleClass, animate, setLoaded} : InitCharacterProps){
  const [animation, setAnimation] = useState<string>(animate);

  const animationEventHandlder = () => {
    setAnimation('animate__shakeX');
    setTimeout(() => {
      setAnimation('animate__fadeOut');
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }, 1000);
  };
  
  return (
    <div
      className={`animate__animated ${styleClass} ${animation} z-60`}
      onAnimationEnd={animationEventHandlder}

    >
      <img
        src={character}
      />
    </div>
  );
}