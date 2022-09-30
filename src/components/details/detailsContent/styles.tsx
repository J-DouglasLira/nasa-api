import styled from 'styled-components';

export const Container = styled.div`
  background: #312e81;
`;

export const Content = styled.div`
  background: #312e81;
  height: calc(100vh - 80px);
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '60'};
  width: 100%;
  padding-bottom: 0px 60px 20px 60px;
  color: #cfcfd1;
`;
