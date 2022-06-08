import React from "react";

import News from "../components/News";

const data = [
  { id: 1, author: 'Jan Brzeczek', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
  { id: 2, author: 'Jan Brzeczek', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
  {
    id: 3, author: 'Jan Brzeczek', title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

function Articles() {
  return (
    <div>
      {data.map((element) => (
        <News
          key={`news-${element.id}`}
          header={element.title}
          author={element.author}
          intro={element.intro}
        />
      ))}
    </div>
  );
}

export default Articles;