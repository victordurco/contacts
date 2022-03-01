import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import CreateOrEditContact from './pages/CreateOrEditContact';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/contato" element={<CreateOrEditContact />} />
          <Route path="*" element={<Home toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
