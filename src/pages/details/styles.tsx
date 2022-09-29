import styled from 'styled-components';

export const ImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export const Content = styled.div`
  background: #312e81;
  height: calc(100vh - 80px);
`;
