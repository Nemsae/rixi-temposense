import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    background: #f7f7f7;
    min-height: 100%;
    min-width: 100%;
  }

  input {
    font-family: 'Montserrat', sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
