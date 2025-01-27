import action_record_container from '../../../public/actions_record_container.png';

interface History {

}

const History: React.FC<History> = ({ }) => {

  return (
    <div className="w-[20%]">
      <img className='w-full h-full' src={action_record_container} alt="action_container" />
    </div>
  )
}

export default History;