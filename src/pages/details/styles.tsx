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
  height: 100%;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '80'};
`;

export const ImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;
