import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { pageRoutes } from './constants/constants';
import { AnimatePresence } from 'framer-motion';
import ConfettiEffect from './components/ConfettiEffect/ConfettiEffect';

const App = () => {
  return (
    <>
      <ConfettiEffect />
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          {pageRoutes.map((item, idx) => (
            <Route key={idx} path={item.path} element={item.element} />
          ))}
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
