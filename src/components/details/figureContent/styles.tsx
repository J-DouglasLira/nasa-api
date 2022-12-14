import styled from 'styled-components';

export const Information = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '80'};
`;

export const Content = styled.div`
  background: #312e81;
  height: calc(100vh - 80px);
`;
