import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => ` ${theme.colors.primary.backGroundColor}`};
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
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 100%;
    color: #ffffff;
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.56),
        rgba(255, 255, 255, 0.56)
      ),
      linear-gradient(45deg, #14affc 0%, #7f23f7 48.96%, #fc19ad 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .searchContainer {
    display: flex;
    width: 505px;
    align-items: center;
    border: 2px solid rgba(209, 213, 219, 0.7);
    padding: 16px 24px;
    margin-top: 20px;
    filter: drop-shadow(0px 1.57895px 3.15789px rgba(0, 0, 0, 0.05));
    border-radius: 33.1579px;
    input {
      border: none;
      background: none;
      width: calc(100% - 25px);
      font-size: 24px;
      outline: none;
      color: #ffffff;
      ::placeholder {
        color: #d1d5db;
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
        filter: invert(1);
      }
    }
  }
  .results {
    display: flex;
    width: calc(100vw - 100px);
    margin: 50px 50px;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    border-bottom: 1px solid #ffffff;
    .controls {
      font-family: "Inter";
      color: #ffffff;
      font-weight: 600;
      font-size: 36px;
      line-height: 100%;
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
