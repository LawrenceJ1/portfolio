import './App.css';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import NavBar from './Components/NavBar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavBar />
      <MainPage />
      <AboutPage />
    </Fragment>
  );
}

export default App;
