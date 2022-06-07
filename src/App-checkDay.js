import './App.css';

const DAY = "monday";

function News({ header, intro }) {
  return (
    <div>
      <h2>{header}</h2>
      <p>{intro}</p>
    </div>
  )
}

function App() {
  const checkDay = () => {
    if (DAY === "monday") {
      return (
        <div>
          <News header="Naglowek 1" intro="Intro 1" />
          <News header="Naglowek 2: Breaking news" intro="Intro 2" />
          <News header="Naglowek 3: Jestem na wakacjach, a i tak pracuje" intro="Intro 3" />
        </div>
      );
    }
    return (
      <div>
        <p>Nie ma newsow z poniedzialku</p>
      </div>
    );
  }
  return (
    <div>
      {checkDay()}
    </div>
  )
}

export default App;
