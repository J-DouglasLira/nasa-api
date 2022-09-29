import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url('../../../public/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
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
    border-radius: 33px;

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

  @media (max-width: 768px) {
    .title {
      font-weight: 300;
      font-size: 40px;
    }

    .subtitle-1 {
      font-size: 40px;
      line-height: 2;
    }

    .subtitle-2 {
      font-size: 40px;
    }

    .searchContainer {
      width: 95vw;
      margin-bottom: 150px;
      input {
        font-size: 25px;
      }
    }
  }

  @media (max-width: 576px) {
    .subtitle-1 {
      font-size: 30px;
    }

    .subtitle-2 {
      font-size: 30px;
    }

    .searchContainer {
      width: 95vw;

      input {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 515px) {
    .subtitle-1 {
      font-size: 30px;
    }
    .subtitle-2 {
      font-size: 30px;
    }
    .searchContainer {
      input {
        font-size: 15px;
      }
    }
  }
`;

export const SectionResults = styled.section`
  position: relative;
  .results {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.three + '80'};
    width: 100%;
    top: -200px;

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

  @media (max-width: 768px) {
    .results {
      padding: 15px;
      .controls {
        font-size: 20px;
        & > span {
          font-weight: 400;
        }
      }
      .about {
        font-weight: 200;
      }
    }
  }

  @media (max-width: 576px) {
  }

  @media (max-width: 515px) {
  }
`;

export const Galery = styled.section`
  background: url('../../../public/background.svg');
  background-repeat: no-repeat;
  background-size: cover;

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
  grid-template-columns: repeat(3, 1fr);
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

export const ImagemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 90px;
  justify-items: center;
  align-items: center;
  margin: 0px 30px 0px 40px;

  a {
    text-decoration: none;
  }

  .card {
    border-radius: 20px;
    width: 320px;
    height: 400px;
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #d1d5db;
    transition: all 0.3s;
    margin-top: 20px;

    &:hover {
      transition: all 0.3s;
      transform: scale(1.05);
    }

    img {
      border-radius: 20px;
      width: 320px;
      height: 200px;
      object-fit: cover;
    }
    h3 {
      color: #f3f3f3;
      text-shadow: #140b0b 1px 0 1px;
    }
  }

  .text-container {
    width: 300px;
    height: 200px;
    overflow: hidden;
    padding: 20px;
    text-align: left;

    p {
      padding-top: 15px;
    }
  }
  .fileSize {
    color: #d1d5db;
    font-size: 22px;
  }
`;
