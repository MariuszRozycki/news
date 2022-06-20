import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
// import Articles from './pages/Articles';
import Footer from './components/Footer';
import Form from './pages/Form';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Content>
        {/* <Articles /> */}
        <Form />
      </Content>
      <Footer />
    </div>
  )
}

export default App;
