import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import MovieDetailPage from '@pages/MovieDetail';
import TvDetailPage from '@pages/TvDetail/intex';
import TvPage from '@pages/TvPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/tv/*" element={<TvPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/tv/:id" element={<TvDetailPage />} />
    </Routes>
  );
};

export default App;
