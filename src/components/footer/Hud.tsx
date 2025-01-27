import History from "./History";
import TurnPhotos from "./TurnPhotos";
import Phase from "./Phase";

interface Hud {
  currentPhase: 'attack' | 'potions';
}

const Hud: React.FC<Hud> = ({ currentPhase }) => {
  return (
    <div className="w-full h-[25%] flex justify-between fixed bottom-0">
      <Phase phase={currentPhase} />
      <TurnPhotos />
      <History />
    </div>
  )
}

export default Hud;