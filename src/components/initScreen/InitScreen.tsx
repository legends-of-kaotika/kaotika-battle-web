import KaotikaLegendsLogo from './KaotikaLengedsLogo';

const InitScreen: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-[url('/images/battle_bg.webp')] bg-no-repeat bg-cover">
      <KaotikaLegendsLogo/>
    </div>
  );
};

export default InitScreen;