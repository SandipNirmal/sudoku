import React from 'react';

import { Header, BaseLayout } from './components';
import Sudoku from './sudoku/Sudoku';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <BaseLayout>
        <Sudoku />
      </BaseLayout>
    </>
  );
}

export default App;
