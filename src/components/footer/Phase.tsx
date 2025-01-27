import action_container from '../../../public/action_container.png'

interface PhaseProps {
  phase: 'attack' | 'potions';
}

const Phase: React.FC<PhaseProps> = ({ phase }) => {
  return (
    <div className="w-[20%] flex flex-col items-center justify-center">
      <img className='w-full h-full' src={action_container} alt="action_container" />
      <div className="absolute text-white text-4xl bottom-32 left-50">
        {phase === 'attack' ? 'Attack' : 'Potions'}
      </div>
    </div>
  );
}

export default Phase;