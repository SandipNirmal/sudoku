import React from 'react';
import styled from 'styled-components';

const AppHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 48px;
  border-bottom: 1px solid #e1e1e1;
`;

const AppNav = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: #444444;
  font-size: 24px;
  line-height: 48px;
  margin: 0;
  margin-left: 16px;
`;

export const Header = React.memo(() => {
  return (
    <AppHeader>
      <AppNav>
        <Logo>Sudoku</Logo>
      </AppNav>
    </AppHeader>
  );
});
