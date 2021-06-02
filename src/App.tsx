import React from 'react';
import GlobalStyles from './GlobalStyles';
import MainPage from './pages/MainPage';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <MainPage />
    </>
  )
}

export default App;