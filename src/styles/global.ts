import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 50%;
    }
  }

  body, #root {
    font-size: 1.6rem;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    background: var(--background);
  }
  :root {
    --primary: #403D39;
    --background: #ff495c;
    --white: #ffffff;
  }
`;
