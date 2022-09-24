import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: transparent;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
  }

  .app-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin-top: 20px;
  }
  .title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.tertiary.one};
  }
  .subtitle-1,
  .subtitle-2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
  }

  .subtitle-1 {
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
  }

  .subtitle-2 {
    color: ${({ theme }) => theme.colors.tertiary.one};
  }

  .searchContainer {
    display: flex;
    width: 505px;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.tertiary.two};
    padding: 16px 24px;
    margin-top: 50px;
    filter: drop-shadow(0px 1.57895px 3.15789px rgba(0, 0, 0, 0.05));
    border-radius: 33.1579px;

    input {
      border: none;
      background: none;
      width: calc(100% - 25px);
      font-size: 24px;
      font-weight: 200;
      outline: none;
      color: ${({ theme }) => theme.colors.tertiary.one};
      ::placeholder {
        color: ${({ theme }) => theme.colors.tertiary.two};
      }
    }

    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      img {
        width: 35px;
        height: 25px;
      }
    }
  }
`;

export const SectionResults = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;

  .results {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '80'};

    .controls {
      font-family: 'Inter';
      color: ${({ theme }) => theme.colors.tertiary.one};
      font-weight: 300;
      font-size: 25px;
      line-height: 100%;

      & > span {
        font-weight: 500;
      }
    }

    .about {
      color: ${({ theme }) => theme.colors.tertiary.one + 'a0'};
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export const Galery = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;

  .results {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '80'};

    .controls {
      font-family: 'Inter';
      color: ${({ theme }) => theme.colors.tertiary.one};
      font-weight: 300;
      font-size: 25px;
      line-height: 100%;

      & > span {
        font-weight: 500;
      }
    }
  }
`;

export const ImgContainer = styled.section`
  display: grid;
  width: 100%;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  grid-auto-rows: minmax(202px, auto);
  grid-gap: 25px;
  .img-container {
    width: 300px;
    background: #d9d9d9;
  }
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
