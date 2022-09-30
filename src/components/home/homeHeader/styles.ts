import styled from 'styled-components';

export const AppLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.tertiary.one};
  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 40px;
  }
`;

export const Subtitle1 = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  text-align: center;
  background: linear-gradient(
      0deg,
      ${({ theme }) => theme.colors.tertiary.two + '80'},
      ${({ theme }) => theme.colors.tertiary.two + '80'}
    ),
    linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.special.one} 0%,
      ${({ theme }) => theme.colors.special.two} 48.96%,
      ${({ theme }) => theme.colors.special.three} 100%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 2;
  }

  @media (max-width: 576px) {
    font-size: 30px;
  }

  @media (max-width: 515px) {
    font-size: 30px;
  }
`;

export const Subtitle2 = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.tertiary.one};
  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
  }

  @media (max-width: 515px) {
    font-size: 30px;
  }
`;
