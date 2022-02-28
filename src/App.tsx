import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
