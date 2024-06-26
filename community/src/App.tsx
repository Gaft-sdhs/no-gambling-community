import React from 'react';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
import { Header } from './components/Header/Header';
import { Container } from './components/container/container';
import { SearchBar } from './components/searchBar/searchBar';
const App = () => { 
  return (
    <Container>
    <Header />
    <SearchBar/>
    {/* <MainContent /> */}
    {/* <Footer /> */}
    </Container>
  );
};

export default App;
