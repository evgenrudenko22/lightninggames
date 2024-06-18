import React, { useState } from 'react';
import './App.css';
import { sql } from '@vercel/postgres'
import Modal from './components/Modal';
import Button from './components/Button';
import Input from './components/Input';
import emailjs from 'emailjs-com'

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
  const [ modalActive, setModalActive ] = useState(false)
  const [ email, setEmail ] = useState("")
  const [ code, setCode ] = useState(0)
  const [ codeIsSended, setCodeIsSended ] = useState(false)
  const [ enterCode, setEnterCode ] = useState("")

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    setCode(generateCode())


    emailjs.send('service_dmj467l', 'template_m4l75sx', {
      from_name: 'Lightning Games',
      message: code.toString(),
      reply_to: email,
    }, '5lO4IDhV_FOywirOQ')
    .then((result) => {
      setCodeIsSended(true)
    }, (error) => {
      alert('Помилка відправки email: ', error.text);
    });


  };

  const register = async () => {
    const data = await sql`INSERT INTO acount (id, email, username) VALUES (${email}, 'Bot')`
  }

  return (
    <div className="App">
      <Modal active={modalActive} setActive={setModalActive}>
        <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <br />
        <Button text="Check email" onClick={(e) => sendEmail(e)}></Button>
        <br />
        <div style={{
          display: codeIsSended ? 'block' : 'none'
        }}>
          <Input placeholder="Enter your email" value={enterCode} onChange={(e) => setEnterCode(e.target.value)}></Input>
          <Button text="Log In"></Button>
          <Button text="Sing Up"></Button>
        </div>
      </Modal>
      <header>
        <h1>Lightning Games</h1>
        <Button text="Sing Up" onClick={() => setModalActive(true)}></Button>
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
