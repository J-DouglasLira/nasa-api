import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  height: 100vh;
  background: cyan;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    border: 1px solid black;
  }
  .app-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
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
`;
