import KaotikaLegendsLogo from './KaotikaLengedsLogo';

import InitCharacter from './InitCharacter';

const InitScreen: React.FC = () => {

  return (
    <div className="w-screen h-screen bg-[url('/images/battle_bg.webp')] bg-no-repeat bg-cover">
      <KaotikaLegendsLogo/>      <InitCharacter
        styleClass=""
        character=""/>
    </div>
  );
};

export default InitScreen;