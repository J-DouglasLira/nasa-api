import styled from 'styled-components';

export const Container = styled.div`
  background: #312e81;
`;
export const Headers = styled.div`
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

export const Btn = styled.div`
  .wrapper {
    transform: translate(-50%, -50%);
  }
  a {
    display: block;
    margin-top: 20px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary.one};
    border: 2px solid ${({ theme }) => theme.colors.tertiary.two};
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  a span {
    position: relative;
    z-index: 2;
  }

  a:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
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
    transition: all 0.35s;
  }

  a:hover {
    color: #fff;
  }

  a:hover:after {
    width: 100%;
  }
`;
