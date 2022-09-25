import styled from 'styled-components';

export const Container = styled.div`
  background: #312e81;
`;
export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '80'};
  height: 75px;
`;

export const Content = styled.div`
  background: #312e81;
  height: calc(100vh - 80px);
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '80'};
`;
