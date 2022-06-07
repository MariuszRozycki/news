import React from 'react';

// import Header from './components/Header';
import { Logo, NavLink } from './components/Header';
import News from './pages/Articles';
import './App.css';

const data = [
  { id: 1, author: 'Jan Brzeczek', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
  { id: 2, author: 'Jan Brzeczek', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
  {
    id: 3, author: 'Jan Brzeczek', title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

function App() {
  return (
    <div>
      <div>
        <Logo />
        <div>
          <NavLink to={"/"} label="link 1" />
          <NavLink to={"/"} label="link 2" />
          <NavLink to={"/"} label="link 3" />
        </div>
      </div>
      {data.map((element) => (
        <News
          key={`news-${element.id}`}
          header={element.title}
          author={element.author}
          intro={element.intro}
        />
      ))}
    </div>
  )
}

export default App;
