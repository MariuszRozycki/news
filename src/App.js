import React, { useState } from 'react';
import './App.css';

const styles = {
  backgroundColor: "#ecf0f1",
  border: "1px solid #2ecc71",
  padding: 10,
  para: {
    backgroundColor: "#f6e58d",
    padding: 10
  }
}

// class News extends React.Component {

//   state = {
//     date: new Date(),
//     score: 5
//   };

//   componentDidMount() {
//     let loading = true;
//     this.setState({ score: 7 }, () => {
//       loading = false;
//     });
//   }

//   render() {
//     const { header, intro } = this.props;
//     // const { date, score } = this.state;
//     return (
//       <div style={styles} >
//         <h2>{header}</h2>
//         <p style={styles.para}>{intro}</p>
//         <p>Date: {this.state.date.toDateString()}</p>
//         <p>Score: {this.state.score}</p>
//       </div>
//     );
//   }
// }

function News({ header, intro }) {
  const [score, setScore] = useState(4);
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
      <p>Score: {score}</p>
    </div>
  )
}

const data = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
  {
    id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

function App() {
  return (
    <div>
      {data.map((element, index) => (
        <News key={`news-${index}`} header={element.title} intro={element.intro} />
      ))}
    </div>
  )
}

export default App;
