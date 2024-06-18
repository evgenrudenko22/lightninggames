import React from 'react';
import './App.css';

const games = [
  {
    id: 1,
    title: 'Гра 1',
    description: 'Опис гри 1.',
    image: 'path/to/your/game1.jpg',
  },
  // Додайте більше ігор тут
];

const teamMembers = [
  {
    id: 1,
    name: 'EvgenRu22',
    role: 'Главний програміст',
  },
  {
    id: 2,
    name: 'Іра',
    role: 'Дизайнер',
  },
  // Додайте більше членів команди тут
];

const Game = ({ title, description, image }) => (
  <div className="game">
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="team-member">
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Lightning Games</h1>
      </header>
      <div className="content">
        <section>
          <h2>Наші Ігри</h2>
          {games.map(game => (
            <Game key={game.id} {...game} />
          ))}
        </section>
        <section>
          <h2>Наша Команда</h2>
          <div className="team">
            {teamMembers.map(member => (
              <TeamMember key={member.id} {...member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
