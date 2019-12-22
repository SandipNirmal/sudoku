import React from 'react';
import styled from 'styled-components';

import { sudokuGenerator } from '../utils';

const Container = styled.section`
  padding: 32px 16px;
`;

const SudokuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Row = styled.div`
  display: flex;
`;

const Item = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e1e1e1;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  min-width: 120px;
  padding: 8px;
  border: 0;
  color: #fff;
  background: #00cc83;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.35s cubic-bezier(0, 0, 0.2, 1);
  border-radius: 4px;

  &:hover {
    color: #fff;
    background: #00a369;
    border-color: #00a369;
    opacity: 1;
  }
`;

function Sudoku() {
  const sudoku = sudokuGenerator();

  return (
    <Container>
      <SudokuContainer>
        {sudoku.map((row, index) => {
          return (
            <Row key={index}>
              {row.map((item, itemIndex) => (
                <Item key={`${index}_${itemIndex}`}>{item}</Item>
              ))}
            </Row>
          );
        })}
      </SudokuContainer>

      <Actions>
        <Button>Verify</Button>
      </Actions>
    </Container>
  );
}

export default Sudoku;
