import React from 'react';
import PlayerAvatar from './PlayerAvatar';

interface Character {
  name: string;
  image: string;
  health: number;
}

const Hud: React.FC = () => {
  const betrayer: Character[] = [
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 100,
    // },
    // {
    //   name: 'The Chinese',
    //   image: '../../../public/images/ander.png',
    //   health: 100,
    // },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 100,
    // },
    // {
    //   name: 'The Chinese',
    //   image: '../../../public/images/ander.png',
    //   health: 100,
    // },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 100,
    // },
    // {
    //   name: 'The Chinese',
    //   image: '../../../public/images/ander.png',
    //   health: 35,
    // },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 50,
    // },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 100,
    // },
    // {
    //   name: 'The Chinese',
    //   image: '../../../public/images/ander.png',
    //   health: 100,
    // },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 100,
    // },
    // {
    //   name: 'The Chinese',
    //   image: '../../../public/images/ander.png',
    //   health: 100,
    // },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 100,
    // },
    // {
    //   name: 'The Chinese',
    //   image: '../../../public/images/ander.png',
    //   health: 35,
    // },
    // {
    //   name: 'Miguel Angel',
    //   image: '../../../public/images/miguel_angel.png',
    //   health: 50,
    // },



  ];

  const loyal: Character[] = [
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 90,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 100,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 100,
    },
    {
      name: 'The Chinese',
      image: '../../../public/images/ander.png',
      health: 35,
    },
    {
      name: 'Miguel Angel',
      image: '../../../public/images/miguel_angel.png',
      health: 50,
    },
  ];


  return (

    <div>
    <div className="w-full max-h-[40%] fixed bottom-0 p-2 flex justify-between">
      {/* Sección de Loyal */}
      <div className="w-[48%] flex flex-col items-start justify-start ">
        <h2 className="text-4xl mb-2">KAOTIKA</h2>
        <div className="flex flex-row flex-wrap items-start justify-start">
          {loyal.map((player, index) => (
            <div key={index} className="flex items-center m-1">
              <PlayerAvatar player={player} />
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Betrayers */}
      <div className="w-[48%] flex flex-col items-start justify-start ">
        <h2 className="text-4xl mb-2">DRAVOCAR</h2>
        <div className="flex flex-row flex-wrap items-start justify-start">
          {betrayer.map((player, index) => (
            <div key={index} className="flex items-center m-1">
              <PlayerAvatar player={player} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );

};

export default Hud;


